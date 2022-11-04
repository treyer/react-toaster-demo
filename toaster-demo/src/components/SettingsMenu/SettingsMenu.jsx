import { SettingsGroupWrapper } from "../../components/SettingsGroupWrapper";
import ShowToastsButtons from "../../components/ShowToastsButtons/ShowToastsButtons";
import { ToastTypeMenu } from "../ToastTypeMenu";
import { AnimationTypeMenu } from "../AnimationTypeMenu";
import { ToastShowTypeMenu } from "../ToastShowTypeMenu";
import { ToastHideTypeMenu } from "../ToastHideTypeMenu";
import { ContainerPositionMenu } from "../ContainerPositionMenu";
import { TextInputPanel } from "../TextInputPanel";
import { IndentsInputPanel } from "../IndentsInputPanel";
import { ColorPanel } from "../ColorPanel";

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
      <ColorPanel />
      <IndentsInputPanel />
    </>
  );
}

export default SettingsMenu;
