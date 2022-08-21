import { MENU_STORE_ID } from "../storeIdList";
import { defineStore } from "pinia";
import initPiniaPersist from "@/configs/piniaPersist";

// MenuStore
export const MenuStore = defineStore(
  MENU_STORE_ID,
  () => {
    const menuList = ref<Menu.MenuOptions[]>();
    // 左菜单是否缩放
    const isCollapse = ref(false);
    return {
      menuList,
      isCollapse,
    };
  },
  {
    persist: initPiniaPersist(MENU_STORE_ID),
  }
);

export const useMenuStore = () => storeToRefs(MenuStore());
