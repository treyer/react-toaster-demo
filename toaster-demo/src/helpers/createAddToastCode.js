import {
  ANIMATION_TYPES,
  HIDE_TO,
  POSITION_TYPE,
  SHOW_FROM,
  TOAST_TYPES,
} from "../constants";
import { TOASTER_IMPORT } from "../constants/codes";

export const createAddToastCode = (text, header, settings) => {
  let code = `${TOASTER_IMPORT}`;
  code += `\ntoaster.addToast(\n`;
  code += `  "${text}",\n`;
  if (header.length > 0) code += `  "${header}"\n`;
  const settingsCode = createSettingsCode(settings);
  if (settingsCode) {
    code += `  {\n${settingsCode}  }\n`;
  }
  code += ");";
  return code;
};

const createSettingsCode = (settings) => {
  let code = "";
  if (+settings.lifeTime > 0) {
    code += `    lifeTime: "${settings.lifeTime}",\n`;
  }
  if (settings.type !== TOAST_TYPES.DEFAULT) {
    code += `    type: "${settings.type}",\n`;
  }
  if (settings.animationType !== ANIMATION_TYPES.EASE_IN_OUT) {
    code += `    animationType: "${settings.animationType}",\n`;
  }
  const [defaultShowFrom, defaultHideTo] = getShowFromAndHideToDefaults(
    settings.containerPosition
  );
  if (settings.showFrom !== defaultShowFrom) {
    code += `    showFrom: "${settings.showFrom}",\n`;
  }
  if (settings.hideTo !== defaultHideTo) {
    code += `    hideTo: "${settings.hideTo}",\n`;
  }
  if (settings.bgColor) {
    code += `    bgColor: "${settings.bgColor}",\n`;
  }
  if (settings.fontColor) {
    code += `    fontColor: "${settings.fontColor}",\n`;
  }
  if (settings.iconColor) {
    code += `    iconColor: "${settings.iconColor}",\n`;
  }
  if (settings.margin !== "") {
    code += `    margin: "${settings.margin}",\n`;
  }
  if (settings.padding !== "") {
    code += `    padding: "${settings.padding}",\n`;
  }

  return code.length === 0 ? null : code;
};

const getShowFromAndHideToDefaults = (containerPosition) => {
  // eslint-disable-next-line default-case
  switch (containerPosition) {
    case POSITION_TYPE.TOP_CENTER:
      return [SHOW_FROM.TOP, HIDE_TO.TOP];
    case POSITION_TYPE.BOTTOM_CENTER:
      return [SHOW_FROM.BOTTOM, HIDE_TO.BOTTOM];
    case POSITION_TYPE.TOP_LEFT:
    case POSITION_TYPE.BOTTOM_LEFT:
      return [SHOW_FROM.LEFT, HIDE_TO.LEFT];
    case POSITION_TYPE.TOP_RIGHT:
    case POSITION_TYPE.BOTTOM_RIGHT:
      return [SHOW_FROM.RIGHT, HIDE_TO.RIGHT];
  }
};
