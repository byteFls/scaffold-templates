import { presetAttributify, presetUno } from "unocss";

export const unocssOption = {
  presets: [
    presetAttributify({
      prefix: "u-",
      prefixedOnly: true,
    }),
    presetUno(),
    // ...other presets
  ],
};
