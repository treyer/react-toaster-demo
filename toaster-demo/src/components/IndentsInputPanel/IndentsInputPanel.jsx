import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { ErrorMessage, Input, PanelWrapper, Wrapper } from "./components";

function IndentsInputPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <Wrapper>
          <Input
            id="toast-margin"
            size="small"
            label="Custom toast margins"
            defaultValue=""
          />
          <ErrorMessage variant="caption" color="red">
            Wrong entry
          </ErrorMessage>
        </Wrapper>
        <Wrapper>
          <Input
            id="toast-header-text"
            size="small"
            label="Custom toast paddings"
            defaultValue=""
          />
          <ErrorMessage variant="caption" color="red">
            Wrong entry
          </ErrorMessage>
        </Wrapper>
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { IndentsInputPanel };
