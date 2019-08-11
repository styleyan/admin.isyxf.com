import axios from 'axios'
import Ajax from './install'
import './axios.config'

/**
 * 发送ajax请求列表
 */
class Apis extends Ajax {
  /**
   * 文章列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  indexList(params) {
    return super.get('/api/article/list', params)
  }

  /**
   * 专辑列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  classifyList(params) {
    return super.get('/api/classify/list', params)
  }

  /**
   * 友链列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  linksList(params) {
    return super.get('/api/link/list', params)
  }

  /**
   * 箴言列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  maximList(params) {
    return super.get('/api/maxim/list', params)
  }

  /**
   * 书单列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  booksList(params) {
    return super.get('/api/books/list', params)
  }
}

const apis = new Apis(axios)
export default apis
