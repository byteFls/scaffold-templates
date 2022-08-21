<template>
  <OnClickOutside @trigger="close">
    <div class="p-12 font-bold text-xl flex">Welcome.</div>
  </OnClickOutside>
  <div u-m-8>
    <p>
      {{ msg }}
    </p>
    <n-button type="success">确定</n-button>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { OnClickOutside } from "@vueuse/components";

defineProps<{ msg: string }>();
// const isOk = ref(false);
const demo = computed(() => {});

const close = () => {
  console.log("out side be clicked");
};
</script>
