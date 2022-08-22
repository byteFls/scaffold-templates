<template>
  <div class="bg-green-50">
    <OnClickOutside @trigger="close">
      <div class="p-12 font-bold text-xl flex">Welcome.</div>
    </OnClickOutside>
    <div m-8 py-4>
      <p>
        {{ msg }}
      </p>
      <n-button type="success">确定</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { OnClickOutside } from "@vueuse/components";

defineProps<{ msg: string }>();
// const isOk = ref(false);

const close = () => {
  console.log("out side be clicked");
};
</script>
