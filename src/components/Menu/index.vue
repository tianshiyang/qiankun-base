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
              <el-icon><location /></el-icon>
              <span>qiankun主应用</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/qiankun-home">qiankun 主系统主页面</el-menu-item>
              <el-menu-item index="1-2" route="/home-one-page">qiankun 页面一</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
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
        <div id="sub-app"></div>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>

<script lang="ts" setup name="index">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>
