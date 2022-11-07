import React from "react";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { ColorInputItem } from "../controls/ColorInputItem";
import { PanelWrapper } from "./components";

import {
  changeBgColor,
  changeFontColor,
  changeIconColor,
} from "../../store/actions/settings";

function ColorPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <ColorInputItem title={"Toast bg color"} action={changeBgColor} />
        <ColorInputItem title={"Toast font color"} action={changeFontColor} />
        <ColorInputItem title={"Toast icon color"} action={changeIconColor} />
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { ColorPanel };
