import { AUTH_STORE_ID } from "../storeIdList";
import { defineStore } from "pinia";
import initPiniaPersist from "@/configs/piniaPersist";

// AuthStore
export const AuthStore = defineStore(
  AUTH_STORE_ID,
  () => {
    const authButtonList = ref([]);
    const authRouteList = ref([]);
    return {
      authButtonList,
      authRouteList,
    };
  },
  {
    persist: initPiniaPersist(AUTH_STORE_ID),
  }
);
