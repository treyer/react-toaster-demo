import ShowToastsButtons from "../../components/ShowToastsButtons/ShowToastsButtons";
import { TextInputPanel } from "../TextInputPanel";
import { IndentsInputPanel } from "../IndentsInputPanel";
import { ColorPanel } from "../ColorPanel";
import { ToastRadioGroup } from "../ToastRadioGroup";
import { LifeTimeInputPanel } from "../LifeTimeInputPanel";

import { POSITION_TYPE } from "../../constants/positions";
import { TOAST_TYPES } from "../../constants/toastTypes";
import { ANIMATION_TYPES } from "../../constants/animationTypes";
import { HIDE_TO, SHOW_FROM } from "../../constants/directions";
import {
  changeAnimationType,
  changeContainerPosition,
  changeHideTo,
  changeShowFrom,
  changeType,
} from "../../store/actions/settings";

function SettingsMenu() {
  return (
    <>
      <ShowToastsButtons />
      <ToastRadioGroup
        id="container-position-type-label"
        name="container-position-type"
        typesObject={POSITION_TYPE}
        title="Container position:"
        storePropName="containerPosition"
        action={changeContainerPosition}
      />
      <TextInputPanel />
      <LifeTimeInputPanel />
      <ToastRadioGroup
        id="toast-type-label"
        name="toast-type"
        typesObject={TOAST_TYPES}
        title="Toast type:"
        storePropName="type"
        action={changeType}
      />
      <ToastRadioGroup
        id="animation-type-label"
        name="animation-type"
        typesObject={ANIMATION_TYPES}
        title="Animation type:"
        storePropName="animationType"
        action={changeAnimationType}
      />
      <ToastRadioGroup
        id="toast-show-type-label"
        name="toast-show-type"
        typesObject={SHOW_FROM}
        title="Custom toast show from:"
        storePropName="showFrom"
        action={changeShowFrom}
      />
      <ToastRadioGroup
        id="toast-hide-type-label"
        name="toast-hide-type"
        typesObject={HIDE_TO}
        title="Custom toast hide to:"
        storePropName="hideTo"
        action={changeHideTo}
      />
      <ColorPanel />
      <IndentsInputPanel />
    </>
  );
}

export default SettingsMenu;
