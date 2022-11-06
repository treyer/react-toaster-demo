import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { TextInputItem } from "../controls/TextInputItem";
import { PanelWrapper } from "./components";

import { changeMargin, changePadding } from "../../store/actions/settings";

function IndentsInputPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <TextInputItem
          id="toast-margin"
          label="Custom toast margins"
          storePropName="margin"
          rules={["isIndentSize"]}
          action={changeMargin}
        />
        <TextInputItem
          id="toast-paddings"
          label="Custom toast paddings"
          storePropName="padding"
          rules={["isIndentSize"]}
          action={changePadding}
        />
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { IndentsInputPanel };
