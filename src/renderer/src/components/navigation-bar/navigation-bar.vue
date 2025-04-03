<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <div class="logo">
      <img class="logo" src="../../assets/icon.png" />
    </div>
    <div class="greeting">
      <el-text :style="{ fontSize: 'large', fontWeight: 'bold' }">Arisa</el-text>
    </div>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">样本清洗</el-menu-item>
    <el-menu-item index="3">样本可视化</el-menu-item>
    <el-menu-item index="3">帮助文档</el-menu-item>
    <el-menu-item index="4">设置</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { ref } from 'vue'

const activeIndex = ref('1') // Define the activeIndex property

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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
