<template>
  <div class="app-container">
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="名称" width="150"></el-table-column>

      <el-table-column
        prop="dictCode"
        label="编码"
        width="150"
      ></el-table-column>

      <el-table-column prop="value" label="值" width="150"></el-table-column>

      <el-table-column prop="createTime" label="创建时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// 引入Api
import dict from '@/api/yygh/dict'
export default {
  data() {
    return {
      list: [] // 数据字典列表数组
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
    }
  }
}
</script>
