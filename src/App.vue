<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from "naive-ui";
</script>

<template>
  <NConfigProvider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>
