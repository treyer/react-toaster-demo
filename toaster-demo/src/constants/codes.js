import { DEFAULT_TEXT } from "./texts";

export const CONTAINER_IMPORT = `import { ToastContainer } from "react-toaster-lib";`;
export const TOASTER_IMPORT = `import { toaster } from "react-toaster-lib";`;
export const CONTAINER_DEFAULT_INFO = "//default position top-right";

export const INITIAL_CONTAINER_CODE = `${CONTAINER_IMPORT}\n${CONTAINER_DEFAULT_INFO}\n<ToastContainer />`;
export const INITIAL_ADD_TOAST_CODE = `${TOASTER_IMPORT}\ntoaster.addToast(\n    "${DEFAULT_TEXT}"\n);`;
