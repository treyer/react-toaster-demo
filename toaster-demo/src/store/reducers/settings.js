import { handleActions } from "redux-actions";

import {
  changeAnimationType,
  changeBgColor,
  changeContainerPosition,
  changeFontColor,
  changeHeaderText,
  changeHideTo,
  changeIconColor,
  changeLifeTime,
  changeMargin,
  changePadding,
  changeShowFrom,
  changeText,
  changeType,
} from "../actions/settings";
import {
  ANIMATION_TYPES,
  HIDE_TO,
  POSITION_TYPE,
  SHOW_FROM,
  TOAST_TYPES,
} from "../../constants";

const INITIAL_STATE = {
  containerPosition: POSITION_TYPE.TOP_LEFT,
  text: "Hello from toast!!!",
  headerText: "Awesome header",
  type: TOAST_TYPES.DEFAULT,
  lifeTime: 0,
  showFrom: SHOW_FROM.RIGHT,
  hideTo: HIDE_TO.RIGHT,
  bgColor: "",
  fontColor: "",
  iconColor: "",
  margin: "",
  padding: "",
  animationType: ANIMATION_TYPES.EASE_IN_OUT,
};

export default handleActions(
  {
    [changeContainerPosition]: (state, action) => {
      return {
        ...state,
        containerPosition: action.payload,
      };
    },
    [changeText]: (state, action) => {
      return {
        ...state,
        text: action.payload,
      };
    },
    [changeHeaderText]: (state, action) => {
      return {
        ...state,
        headerText: action.payload,
      };
    },
    [changeType]: (state, action) => {
      return {
        ...state,
        type: action.payload,
      };
    },
    [changeLifeTime]: (state, action) => {
      return {
        ...state,
        lifeTime: action.payload,
      };
    },
    [changeShowFrom]: (state, action) => {
      return {
        ...state,
        showFrom: action.payload,
      };
    },
    [changeHideTo]: (state, action) => {
      return {
        ...state,
        hideTo: action.payload,
      };
    },
    [changeBgColor]: (state, action) => {
      return {
        ...state,
        bgColor: action.payload,
      };
    },
    [changeFontColor]: (state, action) => {
      return {
        ...state,
        fontColor: action.payload,
      };
    },
    [changeIconColor]: (state, action) => {
      return {
        ...state,
        iconColor: action.payload,
      };
    },
    [changeMargin]: (state, action) => {
      return {
        ...state,
        margin: action.payload,
      };
    },
    [changePadding]: (state, action) => {
      return {
        ...state,
        padding: action.payload,
      };
    },
    [changeAnimationType]: (state, action) => {
      return {
        ...state,
        animationType: action.payload,
      };
    },
  },
  INITIAL_STATE
);
