<template>
  <NMenu :options="menuOptions" @update:value="onUpdateValue" :indent="24" />
</template>

<script setup lang="ts">
import { MenuOption, NMenu, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import { renderIcon } from "@/utils/render";
import {
  HomeOutline as HomeIcon,
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
} from "@vicons/ionicons5";
import { useMenuStore } from "@/stores/modules/menuStore";

const message = useMessage();
const {menuList} = useMenuStore();

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "dashboard",
          },
        },
        {
          default: () => "管理面板",
        }
      ),
    key: "go-back-home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: "且听风吟",
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: "鼠",
        key: "rat",
      },
    ],
  },

  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            label: "羊男",
            key: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(BookIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

const onUpdateValue = (key: string, item: MenuOption) => {
  message.info("[update:value]:" + JSON.stringify(key));
  message.info("[onUpdate:value]: " + JSON.stringify(item));
};
</script>
