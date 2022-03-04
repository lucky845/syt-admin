import request from '@/utils/request'

const API = '/admin/cmn/dict'

export default {
  // 获取所有字典数据
  dictList(pid) {
    return request({
      url: `${API}/childList/${pid}`,
      method: 'get'
    })
  }
}
