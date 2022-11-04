import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { TextInputItem } from "../controls/TextInputItem";
import { PanelWrapper } from "./components";

function TextInputPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <TextInputItem
          id="toast-text"
          label="Custom toast text"
          defaultValue="Hello World"
        />
        <TextInputItem
          id="toast-header-text"
          label="Custom toast header text"
          defaultValue="Hello World"
        />
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { TextInputPanel };
