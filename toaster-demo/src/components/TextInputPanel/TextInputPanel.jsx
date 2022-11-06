import React from "react";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { TextInputItem } from "../controls/TextInputItem";
import { PanelWrapper } from "./components";
import { changeHeaderText, changeText } from "../../store/actions/settings";

function TextInputPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <TextInputItem
          id="toast-text"
          label="Custom toast text"
          storePropName="text"
          rules={["isNotEmpty"]}
          action={changeText}
        />
        <TextInputItem
          id="toast-header-text"
          label="Custom toast header text"
          storePropName="headerText"
          action={changeHeaderText}
        />
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { TextInputPanel };
