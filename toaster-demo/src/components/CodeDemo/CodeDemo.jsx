import { SettingsGroupWrapper } from "../SettingsGroupWrapper";
import { CodeBlock } from "../CodeBlock";
import { HighlighterWrapper } from "./components";

function CodeDemo() {
  const containerCode = `<ToastContainer position"bottom-center">`;
  const codeString = `toaster.addToast(\n"Toast text Toast text Toast text Toast text Toast text Toast text Toast text",\n "Toast header",\n{\ntype: "default"\n});`;
  return (
    <SettingsGroupWrapper>
      <HighlighterWrapper>
        <CodeBlock title="Toast container code:" codeString={containerCode} />
        <CodeBlock title="addToast method code:" codeString={codeString} />
      </HighlighterWrapper>
    </SettingsGroupWrapper>
  );
}

export default CodeDemo;
