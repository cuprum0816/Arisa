<!--
  App.vue
  该文件旨在作为应用程序的入口点，主要用于引入和渲染其他组件。
-->

<script setup lang="ts">
import { ref } from 'vue'
import navigationBar from './components/navigation-bar/navigation-bar.vue'
import mainPage from './pages/main-page.vue'
import sampleCleaning from './pages/sample-cleaning/sample-cleaning.vue'
import sampleVisualization from './pages/sample-visualization/sample-visualization.vue'
import helpDoc from './pages/help-doc/help-doc.vue'
import settings from './pages/settings/settings.vue'

// 用于跟踪当前选中的菜单项
const activeIndex = ref('1')

// 根据菜单项选择更新页面内容
const updateActiveIndex = (index: string) => {
  activeIndex.value = index
}
</script>

<template>
  <navigationBar :activeIndex="activeIndex" @updateActiveIndex="updateActiveIndex" />

  <div v-if="activeIndex === '1'">
    <mainPage />
  </div>
  <div v-if="activeIndex === '2'">
    <sampleCleaning />
  </div>
  <div v-if="activeIndex === '3'">
    <sampleVisualization />
  </div>
  <div v-if="activeIndex === '4'">
    <helpDoc />
  </div>
  <div v-if="activeIndex === '5'">
    <settings />
  </div>
</template>
