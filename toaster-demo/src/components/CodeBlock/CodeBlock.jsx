import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Title, Wrapper } from "./components";

function CodeBlock({ title, language, codeString }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </Wrapper>
  );
}

export { CodeBlock };
