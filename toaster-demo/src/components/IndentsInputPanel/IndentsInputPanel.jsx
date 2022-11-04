import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { TextInputItem } from "../controls/TextInputItem";
import { PanelWrapper } from "./components";

function IndentsInputPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <TextInputItem
          id="toast-margin"
          label="Custom toast margins"
          defaultValue=""
        />
        <TextInputItem
          id="toast-paddings"
          label="Custom toast paddings"
          defaultValue=""
        />
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { IndentsInputPanel };
