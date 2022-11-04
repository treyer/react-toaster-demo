import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  width: 450px;
  margin-right: 30px;
`;

export const Title = styled(Typography)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
`;
