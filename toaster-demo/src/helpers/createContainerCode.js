import { POSITION_TYPE } from "../constants";
import { CONTAINER_DEFAULT_INFO, CONTAINER_IMPORT } from "../constants/codes";

export const createContainerCode = (position) => {
  let code = CONTAINER_IMPORT;
  if (position === POSITION_TYPE.TOP_RIGHT) {
    code += `\n${CONTAINER_DEFAULT_INFO}\n<ToastContainer />`;
  } else {
    code += `\n<ToastContainer position="${position}" />`;
  }

  return code;
};
