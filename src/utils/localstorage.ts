export const getItem = (key: string) => {
  return localStorage.getItem(`${import.meta.env.VITE_STORAGE_PREFIX}_${key}`);
};
