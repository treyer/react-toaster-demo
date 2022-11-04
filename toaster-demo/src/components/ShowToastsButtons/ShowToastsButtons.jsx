import Button from "@mui/material/Button";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { GroupWrapper } from "./components";

function ShowToastsButtons() {
  return (
    <SettingsGroupWrapper>
      <GroupWrapper variant="outlined" size="large">
        <Button color="secondary">Custom</Button>
      </GroupWrapper>
      <GroupWrapper variant="outlined" size="large">
        <Button color="primary">Default</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Danger</Button>
      </GroupWrapper>
    </SettingsGroupWrapper>
  );
}

export default ShowToastsButtons;
