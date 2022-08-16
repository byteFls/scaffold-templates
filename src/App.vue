<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { NConfigProvider } from "naive-ui";
</script>

<template>
  <NConfigProvider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <HelloWorld msg="hello" />
    <RouterView />
  </NConfigProvider>
</template>
