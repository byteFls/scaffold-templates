<template>
  <div u-m-8>
    <p>
      {{ msg }}
    </p>
    <n-button type="success">确定</n-button>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
defineProps<{ msg: string }>();
</script>
