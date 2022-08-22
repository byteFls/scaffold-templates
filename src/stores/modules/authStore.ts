import { AUTH_STORE_ID } from "../storeIdList";
import { defineStore } from "pinia";
import initPiniaPersist from "@/configs/piniaPersist";

// AuthStore
export const AuthStore = defineStore(
  AUTH_STORE_ID,
  () => {
    const authInfo = ref("");
    return {
      authInfo,
    };
  },
  {
    persist: initPiniaPersist(AUTH_STORE_ID),
  }
);

export const useAuthStore = () => storeToRefs(AuthStore());
