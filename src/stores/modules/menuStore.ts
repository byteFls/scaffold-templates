import { MENU_STORE_ID } from "../storeIdList";
import { defineStore } from "pinia";
import initPiniaPersist from "@/configs/piniaPersist";

// AuthStore
export const AuthStore = defineStore(
  MENU_STORE_ID,
  () => {
    const menuList = ref<Menu.MenuOptions[]>();
    // 左菜单是否缩放
    const isMenuScaling = ref(false);
    return {
      menuList,
      isMenuScaling,
    };
  },
  {
    persist: initPiniaPersist(MENU_STORE_ID),
  }
);
