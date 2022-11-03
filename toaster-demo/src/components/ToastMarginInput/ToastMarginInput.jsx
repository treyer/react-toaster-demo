import Typography from "@mui/material/Typography";

import { Input, Wrapper } from "./components";

function ToastMarginInput() {
  return (
    <Wrapper>
      <Input
        required
        id="toast-text"
        label="Custom toast margins"
        defaultValue=""
      />
      <Typography variant="caption" color="red">
        Wrong entry
      </Typography>
    </Wrapper>
  );
}

export { ToastMarginInput };
