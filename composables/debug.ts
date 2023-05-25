import { consola } from "consola";

export const infoLog = (message: any, ...args: any[]) => {
  consola.info(message, ...args);
};
export const errorLog = (message: any, ...args: any[]) => {
  consola.error(message, ...args);
};

export const clientInfoLog = (message: any, ...args: any[]) => {
  if (process.client) {
    consola.info(message, ...args);
  }
};

export const clientErrorLog = (message: any, ...args: any[]) => {
  if (process.client) {
    consola.error(message, ...args);
  }
};

export const serverInfoLog = (message: any, ...args: any[]) => {
  if (process.server) {
    consola.info(message, ...args);
  }
};

export const serverErrorLog = (message: any, ...args: any[]) => {
  if (process.server) {
    consola.error(message, ...args);
  }
};
