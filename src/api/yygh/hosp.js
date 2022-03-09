import request from '@/utils/request'

export default {
  // 医院列表
  getPageList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospital/${current}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 查询dictCode查询下级数据字典
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },
  // 根据id查询下级数据字典
  findByParentId(pid) {
    return request({
      url: `/admin/cmn/dict/childList/${pid}`,
      method: 'get'
    })
  },
  // 更新医院状态
  updateStatus(id, status) {
    return request({
      url: `/admin/hosp/hospital/updateStatus/${id}/${status}`,
      method: 'get'
    })
  },
  // 查看医院详情
  getHospById(id) {
    return request({
      url: `/admin/hosp/hospital/show/${id}`,
      method: 'get'
    })
  },
  // 查看医院科室
  getDeptByHoscode(hoscode) {
    return request({
      url: `/admin/hosp/department/getDeptList/${hoscode}`,
      method: 'get'
    })
  }
}