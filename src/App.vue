<script setup lang="ts">
import { OnClickOutside } from "@vueuse/components";
import HelloWorld from "@/components/HelloWorld.vue";
const close = () => {
  console.log("out side be clicked");
};
</script>

<template>
  <OnClickOutside @trigger="close">
    <div u-m="8" u-bg="green-200" class="p-12 font-bold text-xl flex">
      Welcome.
    </div>
  </OnClickOutside>
  <HelloWorld msg="hello" />
</template>
