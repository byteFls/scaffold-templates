import { createPinia, defineStore, storeToRefs } from "pinia";

import { GLOBAL_STORE_ID } from "./storeIdList";
import initPiniaPersist from "@/configs/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 创建 pinia 实例
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const GlobalStore = defineStore(
  GLOBAL_STORE_ID,
  () => {
    const token = ref("");

    return {
      token,
    };
  },
  {
    persist: initPiniaPersist(GLOBAL_STORE_ID),
  }
);

export const useGlobalStore = () => storeToRefs(GlobalStore());

export default pinia;
