import Typography from "@mui/material/Typography";

import { Input, Wrapper } from "./components";

function ToastTextInput() {
  return (
    <Wrapper>
      <Input
        required
        id="toast-text"
        label="Custom toast text"
        defaultValue="Hello World"
      />
      <Typography variant="caption" color="red">
        Wrong entry
      </Typography>
    </Wrapper>
  );
}

export { ToastTextInput };
