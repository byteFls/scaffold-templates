<template>
  <NLayout has-sider position="absolute">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :width="240"
      :collapsed="isCollapse"
      show-trigger
      @collapse="isCollapse = true"
      @expand="isCollapse = false"
    >
      <Logo :width="46" />
      <Menu />
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </router-view>
    </n-layout-content>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent } from "naive-ui";
import Menu from "./Menu/index.vue";
import Logo from "./Logo/index.vue";
import { useMenuStore } from "@/stores/modules/menuStore";

const { isCollapse, menuList} = useMenuStore();

onMounted(async () => {
  // 读取菜单列表
  // const res = await 
});
</script>

<style scoped></style>
