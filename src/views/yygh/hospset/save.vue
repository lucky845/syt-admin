<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="医院名称">
        <el-input v-model="hospset.hosname" />
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospset.hoscode" />
      </el-form-item>
      <el-form-item label="api地址">
        <el-input v-model="hospset.apiUrl" />
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="hospset.contactsName" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="hospset.contactsPhone" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 引入js文件
import hospset from '@/api/yygh/hospset.js'

export default {
  data() {
    return {
      hospset: {},
      saveBtnDisabled: false // 保存按钮是否禁用,
    }
  },

  methods: {
    saveOrUpdate() {
      // 新增
      if (!this.hospset.id) {
        this.saveData()
        this.saveBtnDisabled = true
      } else {
        // 修改
        this.update()
      }
    },
    // 新增
    saveData() {
      hospset
        .saveHospset(this.hospset)
        .then(response => {
          this.$message.success('保存成功!')
          // 路由跳转
          this.$router.push({ path: '/yygh/hospset/list' })
        })
        .catch(response => {
          // console.log(response)
          this.$message.error('保存失败')
        })
    },
    // 根据id查询医院设置信息
    fetchDataById(id) {
      hospset
        .getHospitalSetById(id)
        .then(response => {
          this.hospset = response.data.item
        })
        .catch(response => {
          this.$message({
            type: 'error',
            message: '获取数据失败'
          })
        })
    },
    // 修改医院设置信息
    update() {
      hospset
        .updateHospitalSetById(this.hospset)
        .then(response => {
          this.$message.success('修改成功')
          // 路由跳转
          this.$router.push({ path: '/yygh/hospset/list' })
        })
        .catch(response => {
          // console.log(response)
          this.$message.error('修改失败')
        })
    }
  },
  created() {
    console.log('created')
    // 页面渲染之前调用方法回显数据
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.fetchDataById(id)
    }
  }
}
</script>
