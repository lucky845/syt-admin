<template>
  <div class="app-container">
    <!-- 导入按钮 -->
    <div style="margin-bottom: 10px">
      <el-button
        icon="el-icon-download"
        type="primary"
        size="mini"
        @click="dialogImportVisible = true"
      >
        导入Excel
      </el-button>
      <!-- Excel导出按钮 -->
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-upload2"
        @click="exportData"
      >
        导出Excel
      </el-button>
    </div>
    <!-- 上传文件弹窗 -->
    <el-dialog title="导入" :visible.sync="dialogImportVisible" width="480px">
      <el-form label-position="right" label-width="170px">
        <el-form-item label="文件">
          <el-upload
            :multiple="false"
            :on-success="onUploadSuccess"
            :action="'http://localhost:8202/admin/cmn/dict/importData'"
            class="upload-demo"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传xls文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogImportVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!-- 展示数据字典列表 -->
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="名称" width="150" />

      <el-table-column prop="dictCode" label="编码" width="150" />

      <el-table-column prop="value" label="值" width="150" />

      <el-table-column prop="createTime" label="创建时间" />
    </el-table>
  </div>
</template>

<script>
// 引入Api
import dict from '@/api/yygh/dict'
export default {
  data() {
    return {
      list: [], // 数据字典列表数组
      dialogImportVisible: false // 上传文件弹窗
    }
  },
  created() {
    this.getDictList(1)
  },
  methods: {
    // 数据字典列表
    getDictList(pid) {
      dict.dictList(pid).then(response => {
        this.list = response.data.list
      })
    },
    load(tree, treeNode, resolve) {
      dict.dictList(tree.id).then(response => {
        resolve(response.data.list)
      })
    },
    // 数据字典Excel导出功能
    exportData() {
      window.location.href = 'http://localhost:8202/admin/cmn/dict/exportData'
    },
    // 弹出上传框
    importData() {
      this.dialogImportVisible = true
    },
    // 上传成功的回调函数
    onUploadSuccess(response, file) {
      this.$message.info('上传成功')
      this.dialogImportVisible = false
      this.getDictList(1)
    }
  }
}
</script>
