export const autoImportOption = {
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
  ],
  // global imports to register
  imports: [
    // presets
    "vue",
    "vue-router",
    "pinia",
    "@vueuse/core",
  ],
  dts: "./src/typings/auto-import.d.ts", // or a custom path
  vueTemplate: false,
  // Generate corresponding .eslintrc-auto-import.json file.
  // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
  eslintrc: {
    enabled: false, // Default `false`
    filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },
};
