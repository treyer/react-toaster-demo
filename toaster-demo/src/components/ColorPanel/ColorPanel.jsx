import React from "react";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { ColorInputItem } from "../controls/ColorInputItem";
import { PanelWrapper } from "./components";

function ColorPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <ColorInputItem title={"Custom toast bg color"} />
        <ColorInputItem title={"Custom toast font color"} />
        <ColorInputItem title={"Custom toast icon color"} />
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { ColorPanel };
