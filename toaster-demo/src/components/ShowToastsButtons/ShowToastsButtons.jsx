import Button from "@mui/material/Button";
import { toaster } from "react-toaster-lib";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { GroupWrapper } from "./components";

import { DEFAULT_HEADER, DEFAULT_TEXT } from "../../constants/texts";
import { TOAST_TYPES } from "../../constants/toastTypes";

function ShowToastsButtons() {
  const showDefaultToast = () => {
    toaster.addToast(DEFAULT_TEXT, DEFAULT_HEADER, { lifeTime: 2000 });
  };
  const showInfoToast = () => {
    toaster.addToast(DEFAULT_TEXT, DEFAULT_HEADER, {
      type: TOAST_TYPES.INFO,
      lifeTime: 2000,
    });
  };
  const showSuccessToast = () => {
    toaster.addToast(DEFAULT_TEXT, DEFAULT_HEADER, {
      type: TOAST_TYPES.SUCCESS,
      lifeTime: 2000,
    });
  };
  const showWarningToast = () => {
    toaster.addToast(DEFAULT_TEXT, DEFAULT_HEADER, {
      type: TOAST_TYPES.WARNING,
      lifeTime: 2000,
    });
  };
  const showDangerToast = () => {
    toaster.addToast(DEFAULT_TEXT, DEFAULT_HEADER, {
      type: TOAST_TYPES.DANGER,
      lifeTime: 2000,
    });
  };

  return (
    <SettingsGroupWrapper>
      <GroupWrapper variant="contained" size="large">
        <Button color="secondary">Custom</Button>
      </GroupWrapper>
      <GroupWrapper variant="outlined" size="large">
        <Button color="primary" onClick={showDefaultToast}>
          Default
        </Button>
        <Button color="info" onClick={showInfoToast}>
          Info
        </Button>
        <Button color="success" onClick={showSuccessToast}>
          Success
        </Button>
        <Button color="warning" onClick={showWarningToast}>
          Warning
        </Button>
        <Button color="error" onClick={showDangerToast}>
          Danger
        </Button>
      </GroupWrapper>
    </SettingsGroupWrapper>
  );
}

export default ShowToastsButtons;
