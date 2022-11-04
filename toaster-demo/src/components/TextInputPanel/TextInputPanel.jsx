import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { ErrorMessage, Input, PanelWrapper, Wrapper } from "./components";

function TextInputPanel() {
  return (
    <SettingsGroupWrapper>
      <PanelWrapper>
        <Wrapper>
          <Input
            required
            id="toast-text"
            size="small"
            label="Custom toast text"
            defaultValue="Hello World"
          />
          <ErrorMessage variant="caption" color="red">
            Wrong entry
          </ErrorMessage>
        </Wrapper>
        <Wrapper>
          <Input
            id="toast-header-text"
            size="small"
            label="Custom toast header text"
            defaultValue="Hello World"
          />
          <ErrorMessage variant="caption" color="red">
            Wrong entry
          </ErrorMessage>
        </Wrapper>
      </PanelWrapper>
    </SettingsGroupWrapper>
  );
}

export { TextInputPanel };
