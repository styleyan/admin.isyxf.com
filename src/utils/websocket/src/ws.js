import EventEmitter from 'events'
import protobufjs from 'protobufjs'
import wsmessageJson from './wsmessage.json'

/**
 * socket链接
 * @extends {EventEmitter}
 */
class Ws extends EventEmitter {
  /**
   * Creates an instance of Ws.
   * @param {String} url - 链接地址
   * @param {Object} params - 链接参数
   */
  constructor(url, params) {
    super()
    this.url = `ws://${url}`
    this.token = params.token
    this.protobufRoot = protobufjs.Root.fromJSON(wsmessageJson)
    this._arrMsg = []
    let WebSocket = global.WebSocket
    if (!WebSocket) {
      WebSocket = global.MozWebSocket
    }
    // 链接webSocket
    this.socket = new WebSocket(`${this.url}`)
    this._socketExtendEvent()
  }

  /**
   * 绑定【分发、订阅】模式，并添加【error、close、open】事件监听
   */
  _socketExtendEvent() {
    const socket = this.socket
    socket.binaryType = 'arraybuffer'

    socket.onerror = ev => this.emit('error', ev)
    socket.onclose = ev => this.emit('close', ev)
    socket.onopen = (ev) => {
      this.emit('open', ev)
      // TODO: 正在链接中，就调用send方法会报错。
      this._arrMsg.forEach((unitcode) => {
        this.socket.send(unitcode)
      })
      this._arrMsg = null
    }
    socket.onmessage = async (ev) => {
      const msg = this._parseMsg(ev.data)
      await this.send(msg.mid)
      this.emit('message', ev, msg)
    }
  }

  /**
   * 解码函数
   * @param {any} data - 待解码数据
   * @returns {String} 解码后文字
   */
  _parseMsg(data) {
    const messageType = this.protobufRoot.lookup('proto.WsPushMessage')
    // 解码
    return messageType.decode(new Uint8Array(data).slice(1))
  }

  /**
   * 目前前端不需要给java发送自定义消息，而是收到消息之后返回一个带消息id的，在_socketExtendEvent里自动处理了
   * @param {any} mid -  消息对象里的消息id
   */
  async send(mid) {
    const WsMessageAck = this.protobufRoot.lookup('proto.WsMessageAck')
    const message = WsMessageAck.create({
      token: this.token,
      mid,
    })
    const buff = WsMessageAck.encode(message).finish()
    const unitcode = new Uint8Array(buff.length + 1)
    unitcode[0] = 3
    unitcode.set(buff, 1)

    // TODO: 正在链接中，就调用send方法会报错。
    if (this.socket.readyState) {
      this.socket.send(unitcode)
    } else {
      this._arrMsg.push(unitcode)
    }
  }
}

/**
 * 创建ws实例
 * @param {any} url - 链接地址
 * @param {any} params - 链接参数
 * @returns {Object} socket实例
 */
export default function (url, params) {
  return new Ws(url, params)
}
