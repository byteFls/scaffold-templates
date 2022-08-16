import { PersistedStateOptions } from "pinia-plugin-persistedstate";

export default function initPiniaPersist(key: string) {
  const persist: PersistedStateOptions = {
    key,
    storage: window.localStorage,
  };
  return persist;
}
