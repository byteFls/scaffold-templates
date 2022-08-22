<template>
  <div>
    <span class="bg-gray-200 p-8">
      <RouterLink to="/">首页</RouterLink>
    </span>
    <HelloWorld msg="ok" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style scoped></style>
