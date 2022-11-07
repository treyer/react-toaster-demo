import { useSelector } from "react-redux";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { CodeBlock } from "../CodeBlock";
import { HighlighterWrapper } from "./components";
import { createContainerCode } from "../../helpers/createContainerCode";
import { createAddToastCode } from "../../helpers/createAddToastCode";

function CodeDemo() {
  const { containerPosition } = useSelector((state) => state.settings);
  const { settings } = useSelector((state) => state);
  const { text, headerText, ...rest } = settings;

  return (
    <SettingsGroupWrapper>
      <HighlighterWrapper>
        <CodeBlock
          title="Toast container code:"
          codeString={createContainerCode(containerPosition)}
        />
        <CodeBlock
          title="addToast method code:"
          codeString={createAddToastCode(text, headerText, rest)}
        />
      </HighlighterWrapper>
    </SettingsGroupWrapper>
  );
}

export default CodeDemo;
