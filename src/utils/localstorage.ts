/**
 * 描述 从 localStorage 取值，自己处理是否需要转化 JSON
 * @date 2022-08-21
 * @param {any} key:string
 * @returns {any}
 */
export const getItem = (key: string) => {
  return localStorage.getItem(`${import.meta.env.VITE_STORAGE_PREFIX}_${key}`);
};

/**
 * 描述 将字符串或对象存到 localStorage 里，增加特殊的前缀，自动处理字符串和对象
 * @date 2022-08-21
 * @param {any} key:string
 * @param {any} value:unknown
 * @returns {any}
 */
export const setItem = (key: string, value: unknown) => {
  try {
    if (typeof value === "string") {
      localStorage.setItem(
        `${import.meta.env.VITE_STORAGE_PREFIX}_${key}`,
        value
      );
    } else {
      // 视为对象
      localStorage.setItem(
        `${import.meta.env.VITE_STORAGE_PREFIX}_${key}`,
        JSON.stringify(value)
      );
    }
  } catch (error) {
    console.log("设置 local storage 失败：", error);
  }
};
