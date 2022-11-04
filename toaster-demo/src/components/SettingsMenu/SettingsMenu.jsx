import { SettingsGroupWrapper } from "../../components/SettingsGroupWrapper";
import ShowToastsButtons from "../../components/ShowToastsButtons/ShowToastsButtons";
import { ToastTypeMenu } from "../ToastTypeMenu";
import { AnimationTypeMenu } from "../AnimationTypeMenu";
import { ToastShowTypeMenu } from "../ToastShowTypeMenu";
import { ToastHideTypeMenu } from "../ToastHideTypeMenu";
import { ContainerPositionMenu } from "../ContainerPositionMenu";
import { BgColorPicker } from "../BgColorPicker";
import { FontColorPicker } from "../FontColorPicker";
import { IconColorPicker } from "../IconColorPicker";
import { ToastMarginInput } from "../ToastMarginInput";
import { ToastPaddingInput } from "../ToastPaddingInput";
import { TextInputPanel } from "../TextInputPanel";

function SettingsMenu() {
  return (
    <>
      <SettingsGroupWrapper>
        <ShowToastsButtons />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <ContainerPositionMenu />
      </SettingsGroupWrapper>
      <TextInputPanel />
      <SettingsGroupWrapper>
        <ToastTypeMenu />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <AnimationTypeMenu />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <ToastShowTypeMenu />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <ToastHideTypeMenu />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <BgColorPicker />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <FontColorPicker />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <IconColorPicker />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <ToastMarginInput />
      </SettingsGroupWrapper>
      <SettingsGroupWrapper>
        <ToastPaddingInput />
      </SettingsGroupWrapper>
    </>
  );
}

export default SettingsMenu;
