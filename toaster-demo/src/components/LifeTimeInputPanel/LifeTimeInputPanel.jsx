import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { PanelWrapper } from "./components";
import { changeLifeTime } from "../../store/actions/settings";
import { TextInputItem } from "../controls/TextInputItem";

function LifeTimeInputPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <TextInputItem
          id="toast-lifetime"
          label="Custom toast lifetime (ms)"
          storePropName="lifeTime"
          inputType="positiveNumber"
          action={changeLifeTime}
        />
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { LifeTimeInputPanel };
