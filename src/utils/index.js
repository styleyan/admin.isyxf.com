export default {
  /**
   * 拷贝对象
   * @param {Object} obj 复制对象
   */
  clone(obj) {
    return JSON.parse(JSON.stringify(obj))
  },
}