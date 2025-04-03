<!--
  navigation-bar.vue
  该文件定义了一个导航栏组件，使用 Element Plus 的菜单组件来实现导航功能。
  导航栏包含一个 logo 和一个问候语，使用了 Vue 3 的 Composition API。
  该组件的主要功能是提供一个水平的导航菜单，用户可以通过点击菜单项来进行页面导航。
  该组件使用了 Element Plus 的 ElMenu 和 ElMenuItem 组件来实现菜单功能。
  该组件还定义了一个 activeIndex 属性，用于跟踪当前选中的菜单项。
  该组件还定义了一个 navBarSelect 方法，用于处理菜单项的选择事件。
-->
<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="navBarSelect">
    <div class="logo">
      <img class="logo" src="../../assets/icon.png" />
    </div>
    <div class="greeting">
      <el-text :style="{ fontSize: 'large', fontWeight: 'bold' }">Arisa</el-text>
    </div>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">样本清洗</el-menu-item>
    <el-menu-item index="3">样本可视化</el-menu-item>
    <el-menu-item index="4">帮助文档</el-menu-item>
    <el-menu-item index="5">设置</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue'

// 定义事件，通知父组件更新选中的菜单项
const emit = defineEmits(['updateActiveIndex'])

// activeIndex 用于在本组件中标记当前选中的菜单项
const activeIndex = ref('1')

// 当菜单项被选中时触发此方法
const navBarSelect = (key: string, keyPath: string[]) => {
  // 触发事件，将选中的 key 传递给父组件
  emit('updateActiveIndex', key)
}
</script>

<style scoped>
.logo {
  width: 40px;
  height: 40px;
  margin-right: 30px;
  margin-left: 10px;
  margin-top: 5px;
}
.greeting {
  display: flex;
  font-size: 40px;
  margin-right: 30px;
}
</style>