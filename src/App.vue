<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from "naive-ui";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <NConfigProvider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <NMessageProvider>
      <HelloWorld msg="ok" />
    </NMessageProvider>
  </NConfigProvider>
</template>
