import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const PanelWrapper = styled(Box)`
  display: flex;
`;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  margin-right: 30px;
`;

export const Input = styled(TextField)`
  width: 400px;
  margin: 5px 0;
`;

export const ErrorMessage = styled(Typography)`
  padding-left: 10px;
`;
