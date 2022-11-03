import { createAction } from "redux-actions";

import {
  CHANGE_ANIMATION_TYPE,
  CHANGE_BG_COLOR,
  CHANGE_CONTAINER_POSITION,
  CHANGE_FONT_COLOR,
  CHANGE_HEADER_TEXT,
  CHANGE_HIDE_TO,
  CHANGE_ICON_COLOR,
  CHANGE_LIFE_TIME,
  CHANGE_MARGIN,
  CHANGE_PADDING,
  CHANGE_SHOW_FROM,
  CHANGE_TEXT,
  CHANGE_TYPE,
} from "./types";

export const changeType = createAction(CHANGE_TYPE);
export const changeText = createAction(CHANGE_TEXT);
export const changeHeaderText = createAction(CHANGE_HEADER_TEXT);
export const changeLifeTime = createAction(CHANGE_LIFE_TIME);
export const changeShowFrom = createAction(CHANGE_SHOW_FROM);
export const changeHideTo = createAction(CHANGE_HIDE_TO);
export const changeBgColor = createAction(CHANGE_BG_COLOR);
export const changeFontColor = createAction(CHANGE_FONT_COLOR);
export const changeIconColor = createAction(CHANGE_ICON_COLOR);
export const changeMargin = createAction(CHANGE_MARGIN);
export const changePadding = createAction(CHANGE_PADDING);
export const changeAnimationType = createAction(CHANGE_ANIMATION_TYPE);
export const changeContainerPosition = createAction(CHANGE_CONTAINER_POSITION);
