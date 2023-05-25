import { PluginOptions, useToast } from "vue-toastification";

export const showInfoMessage = (content: string, options?: PluginOptions) => {
  const { info } = useToast();
  info(content, options);
};

export const showSuccessMessage = (
  content: string,
  options?: PluginOptions
) => {
  const { success } = useToast();
  success(content, options);
};

export const showErrorMessage = (content: string, options?: PluginOptions) => {
  const { error } = useToast();
  error(content, options);
};

export const showWarningMessage = (
  content: string,
  options?: PluginOptions
) => {
  const { warning } = useToast();
  warning(content, options);
};
