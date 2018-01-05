import axios from 'axios'
import Ajax from './install'
import './axios.config'

/**
 * 发送ajax请求列表
 */
class Apis extends Ajax {
  /**
   * 删除文章
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294679
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogDelete(params) {
    return super.post(`/api/blog/delete/${params.articleId}`)
  }

  /**
   * 文章列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogList(params) {
    return super.post('/api/blog/list', params)
  }

  /**
   * 文章详情
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294889
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogDetail(params) {
    return super.post(`/api/blog/detail/${params.articleId}`, params)
  }

  /**
   * 新增文章
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294678
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogAdd(params) {
    return super.post(`/api/blog/add`, params)
  }

  /**
   * 更新文章
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294678
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogUpdate(params) {
    return super.post(`/api/blog/update`, params)
  }

  /**
   * 删除友情链接
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294606
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  linksDelete(params) {
    return super.post(`/api/links/delete`, params)
  }

  /**
   * 友链列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294394
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  linksList(params) {
    return super.post(`/api/links/list`, params)
  }

  /**
   * 新增/修改友链
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294395
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  linksAdd(params) {
    return super.post(`/api/links/add`, params)
  }

  /**
   * 后台用户登录
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294782
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  adminLogin(params) {
    return super.post(`/api/admin/login`, params)
  }

  /**
   * 后台用户退出
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294835
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  adminLogout(params) {
    return super.post(`/api/admin/logout`, params)
  }

  /**
   * 删除导航
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294672
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  haoDelete(params) {
    return super.post(`/api/hao/delete`, params)
  }

  /**
   * 导航列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294392
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  haoList(params) {
    return super.post(`/api/hao/list`, params)
  }

  /**
   * 新增/修改导航
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294674
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  haoAdd(params) {
    return super.post(`/api/hao/add`, params)
  }

  /**
   * 测试测试代理哦
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294674
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  haoNav(params) {
    return super.get(`/api/hao/nav`, params)
  }
}

const apis = new Apis(axios)
export default apis
