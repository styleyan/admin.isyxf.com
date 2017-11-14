import axios from 'axios'
import Ajax from './install'
import './axios.config'

/**
 * 发送ajax请求列表
 */
class Apis extends Ajax {
  /**
   * 测试例子数据
   * @url http://rap.ops.xkeshi.so/workspace/myWorkspace.action?projectId=65#4170
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  login(params) {
    return super.post('/api/example', params)
  }
}

const apis = new Apis(axios)
export default apis
