import Typography from "@mui/material/Typography";

import { Input, Wrapper } from "./components";

function ToastHeaderInput() {
  return (
    <Wrapper>
      <Input
        id="toast-header-text"
        label="Custom toast header text"
        defaultValue="Hello World"
      />
      <Typography variant="caption" color="red">
        Wrong entry
      </Typography>
    </Wrapper>
  );
}

export { ToastHeaderInput };
