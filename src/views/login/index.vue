<template>
  <OtherLayoutVue>
    <div class="flex flex-col justify-center items-center gap-6">
      <div class="flex items-center gap-2">
        <img src="/vite.svg" />
        <h3>{{ projectName }}</h3>
      </div>
      <div>
        <NForm
          :label-width="80"
          ref="formRef"
          :model="formValue"
          :rules="rules"
        >
          <NFormItem label="用户名" path="username">
            <NInput v-model:value="formValue.username" placeholder="root" />
          </NFormItem>
          <NFormItem label="密码" path="password">
            <NInput v-model:value="formValue.password" placeholder="1234" />
          </NFormItem>
          <NFormItem>
            <NButton attr-type="button" @click="onSubmit">登录</NButton>
          </NFormItem>
        </NForm>
      </div>
    </div>
  </OtherLayoutVue>
</template>

<script setup lang="ts">
import {
  FormInst,
  NForm,
  NFormItem,
  NInput,
  useMessage,
  NButton,
} from "naive-ui";
import OtherLayoutVue from "@/components/layouts/OtherLayout.vue";
import { setItem } from "@/utils/localStorage";

const projectName = import.meta.env.VITE_PROJECT_NAME;
const router = useRouter();
const formRef = ref<FormInst>();
const message = useMessage();
const formValue = ref({
  username: "",
  password: "",
});
const rules = {
  username: {
    required: true,
    message: "请输入用户名",
    trigger: "blur",
  },
  password: {
    required: true,
    message: "请输入密码",
    trigger: "blur",
  },
};

const onSubmit = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (errors) {
      console.log(errors);
      message.error("错误的用户名或密码");
    } else {
      message.success("登录成功");
      setItem("token", "fake token");
      router.push("/dashboard/index");
    }
  });
};
</script>

<style scoped></style>
