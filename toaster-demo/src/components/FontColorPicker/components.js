import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Title = styled(Typography)`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
`;

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
`;
