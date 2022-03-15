import request from '@/utils/request'

const API = '/admin/userinfo'

export default {
  // 获取就诊人分页信息
  getPageList(page, limit, searchObj) {
    return request({
      url: `${API}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 用户锁定与解锁
  lock(userId, status) {
    return request({
      url: `${API}/lock/${userId}/${status}`,
      method: 'get'
    })
  },
  // 用户详情
  show(id) {
    return request({
      url: `${API}/show/${id}`,
      method: 'get'
    })
  },
  // 认证审批
  approval(userId, authStatus) {
    return request({
      url: `${API}/approval/${userId}/${authStatus}`,
      method: 'get'
    })
  }
}
