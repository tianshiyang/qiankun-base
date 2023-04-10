<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>qiankun 主页面</el-breadcrumb-item>
  </el-breadcrumb>

  <h1>vue2子应用Router的参数：状态名称 {{ route.query.statusName }}</h1>

  <el-form label-position="right" inline label-width="80px" class="form-style" :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item>
  </el-form>

  <el-button-group>
    <el-button type="primary" @click="goVue2">vue2 子系统</el-button>
    <el-button type="primary" @click="goVue3">vue3 子系统</el-button>
  </el-button-group>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: ''
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const goVue2 = () => {
  router.push({
    path: "/vue2/pageOne",
    query: {
      id: 1,
      name: "张三",
      age: 18
    }
  })
}

const goVue3 = () => {
  router.push({
    path: "/vue3"
  })
}
</script>

<style scoped lang="scss">
.form-style {
  margin-top: 20px;
}
</style>
