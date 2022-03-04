import request from '@/utils/request'

const API = "/admin/hosp/hospitalSet";

export default {
    // 查询医院设置列表
    getHospitaSetPage(page, limit, searchObj) {
        return request({
            url: `${API}/${page}/${limit}`,
            method: 'post',
            data: searchObj
        });
    },
    // 根据id逻辑删除医院设置信息
    deleteById(id) {
        return request({
            url: `${API}/delete/${id}`,
            method: 'delete'
        });
    },
    // 新增医院设置信息
    saveHospset(hospset) {
        return request({
            url: `${API}/save`,
            method: 'post',
            data: hospset
        });
    },
    // 根据id查询医院设置信息
    getHospitalSetById(id) {
        return request({
            url: `${API}/info/${id}`,
            method: 'get'
        });
    },
    // 根据id修改医院设置信息
    updateHospitalSetById(hospitalSet) {
        return request({
            url: `${API}/update`,
            method: 'post',
            data: hospitalSet
        });
    },
    // 批量删除
    removeRows(ids) {
        return request({
            url: `${API}/batchDelete`,
            method: 'delete',
            data: ids
        })
    },
    //锁定和取消锁定
    lockHospSet(id, status) {
        return request({
            url: `/admin/hosp/hospitalSet/modify/${id}/${status}`,
            method: 'put'
        })
    }
}
