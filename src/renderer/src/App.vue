<!--
  App.vue
  该文件旨在作为应用程序的入口点，主要用于引入和渲染其他组件。
-->

<template>
  <div class="app">
    <navigationBar
      :active-index="activeIndex"
      @update-active-index="updateActiveIndex"
    />

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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import navigationBar from "./components/navigation-bar/navigation-bar.vue";
import mainPage from "./pages/main-page.vue";
import sampleCleaning from "./pages/sample-cleaning/sample-cleaning.vue";
import sampleVisualization from "./pages/sample-visualization/sample-visualization.vue";
import helpDoc from "./pages/help-doc/help-doc.vue";
import settings from "./pages/settings/settings.vue";

// 用于跟踪当前选中的菜单项
const activeIndex = ref("1");

// 根据菜单项选择更新页面内容和标题
const updateActiveIndex = (index: string): void => {
  activeIndex.value = index;
  updateTitle();
};

// 更新文档标题
const updateTitle = (): void => {
  let title = "Arisa App";
  switch (activeIndex.value) {
    case "1":
      title = "Arisa - Main Page";
      break;
    case "2":
      title = "Arisa - Sample Service";
      break;
    case "3":
      title = "Arisa - Database Service";
      break;
    case "4":
      title = "Arisa - Help Doc";
      break;
    case "5":
      title = "Arisa - Settings";
      break;
  }
  document.title = title;
};

// 初始化时设置标题
onMounted(() => {
  updateTitle();
});
</script>
