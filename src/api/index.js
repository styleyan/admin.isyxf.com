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
   * 添加文章
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  articleAdd(params) {
    return super.post('/api/article/add', params)
  }

  /**
   * 删除文章
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Number} id - 文章id
   * @returns {Promise} 请求结果
   */
  articleDelete(id) {
    return super.post(`/api/article/${id}/delete`)
  }

  /**
   * 文章编辑
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  articleEdit(params) {
    return super.post('/api/article/edit', params)
  }

  /**
   * 文章信息
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  articleDetail(params) {
    return super.get(`/api/article/${params.id}/detail`)
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
   * 添加专辑
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  classifyAdd(params) {
    return super.post('/api/classify/add', params)
  }

  /**
   * 删除专辑
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} id -专辑id
   * @returns {Promise} 请求结果
   */
  classifyDelete(id) {
    return super.post(`/api/classify/${id}/delete`)
  }

  /**
   * 更新专辑
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} id -专辑id
   * @returns {Promise} 请求结果
   */
  classifyUpdate(params) {
    return super.post('/api/classify/edit', params)
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
   * 添加友链
   * @param {Object} params 友链
   */
  linksAdd(params) {
    return super.post('/api/link/add', params)
  }

  /**
   * 更新友链
   * @param {Object} params 友链
   */
  linksUpdate(params) {
    return super.post('/api/link/edit', params)
  }

  /**
   * 更新友链
   * @param {String} id 友链
   */
  linksDelete(id) {
    return super.post(`/api/link/${id}/delete`)
  }

  /**
   * 搜索箴言
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  maximSearchList(params) {
    return super.get('/api/maxim/search', params)
  }

  /**
   * 添加箴言
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  maximAdd(params) {
    return super.post('/api/maxim/add', params)
  }

  /**
   * 删除箴言
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  maximDelete(id) {
    return super.post(`/api/maxim/${id}/delete`)
  }

  /**
   * 更新箴言
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  maximUpdate(params) {
    return super.post(`/api/maxim/edit`, params)
  }

  /**
   * 书单添加
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  booksAdd(params) {
    return super.post('/api/books/add', params)
  }

  /**
   * 书单删除
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} id - 请求参数
   * @returns {Promise} 请求结果
   */
  booksDelete(id) {
    return super.post(`/api/books/${id}/delete`)
  }

  /**
   * 书单更新
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  booksUpdate(params) {
    return super.post('/api/books/update', params)
  }

  /**
   * 搜索书单列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  booksSearchList(params) {
    return super.get('/api/books/search', params)
  }

  /**
   * 登录
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  userLogin(params) {
    return super.post('/api/user/login', params)
  }

  /**
   * 添加标签
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  tagsAdd(params) {
    return super.post('/api/tags/add', params)
  }

  /**
   * 删除标签
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  tagsDelete(id) {
    return super.post(`/api/tags/${id}/delete`)
  }

  /**
   * 添加标签
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  tagsUpdate(params) {
    return super.post('/api/tags/update', params)
  }

  /**
   * 标签列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  tagsList() {
    return super.get('/api/tags/list')
  }
}

const apis = new Apis(axios)
export default apis
