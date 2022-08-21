<template>
  <router-link to="/dashboard/index">
    <img src="/vite.svg" :width="width" class="block mx-auto my-12" />
  </router-link>
</template>

<script lang="ts" setup>
defineProps<{ width: number }>();
</script>
