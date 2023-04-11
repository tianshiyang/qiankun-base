<template>
  <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Location /></el-icon>
              <span>qiankun主应用</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/qiankun-home">qiankun 主系统主页面</el-menu-item>
              <el-menu-item index="1-2" route="/home-one-page">qiankun 页面一</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Location /></el-icon>
              <span>Vue2 页面</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" route="/vue2">vue2Page1</el-menu-item>
              <el-menu-item index="2-2" route="/vue3">item two</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="header">
          <h1>主应用的数据 -> 姓名: {{ state.name }}, 数量: {{ state.count }}</h1>
          <el-button type="danger" @click="changeMainState">改变数据</el-button>
        </div>
        <div id="sub-app"></div>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>

<script lang="ts" setup name="index">
import { Location } from '@element-plus/icons-vue'
import actions from "@/qiankun/actions"
import { ref } from "vue"

const state = ref()
actions.getGlobalState(currentState => {
  state.value = currentState
})

actions.onGlobalStateChange((currentState: unknown) => {
  state.value = currentState
})

const changeMainState = () => {
  actions.setGlobalState({
    name: "王武",
    count: state.value.count + 10
  })
}

const handleOpen = () => {
  // console.log(key, keyPath)
}
const handleClose = () => {
  // console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-radius: 10px;
  background: rgb(51, 154, 223)
}
</style>
