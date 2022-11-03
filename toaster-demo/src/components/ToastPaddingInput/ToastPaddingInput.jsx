import Typography from "@mui/material/Typography";

import { Input, Wrapper } from "./components";

function ToastPaddingInput() {
  return (
    <Wrapper>
      <Input
        required
        id="toast-text"
        label="Custom toast paddings"
        defaultValue=""
      />
      <Typography variant="caption" color="red">
        Wrong entry
      </Typography>
    </Wrapper>
  );
}

export { ToastPaddingInput };
