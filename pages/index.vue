<template>
  <div>
    <h1 class="text-3xl font-bold underline p-12">Nuxt3 Template</h1>
    <div class="px-12 text-green-300 text-2xl">ssr</div>
    <ul class="px-12 py-20 text-purple-700">
      <li v-for="{ title, id } in data?.rows" :key="id">{{ title }}</li>
    </ul>
    <button
      class="bg-blue-700 text-white px-4 py-2 rounded-md ml-10"
      :disabled="page === 1"
      @click="page--"
    >
      prev
    </button>
    <button
      class="bg-blue-700 text-white px-4 py-2 rounded-md ml-10"
      @click="page++"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { defaultApi } from "~/services/basic";

showInfoMessage("Hello from Nuxt3!");

const page = ref(1);
const { data, suspense } = useQuery({
  queryKey: ["test", page],
  queryFn: () =>
    defaultApi.getData({
      page: page.value,
      fid: 1,
    }),
});

await suspense();
infoLog(data);
</script>
