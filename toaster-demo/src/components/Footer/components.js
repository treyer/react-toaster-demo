import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { COLOR_BLUE, COLOR_GREY } from "../../constants/colors";

export const FooterBox = styled(Box)`
  display: flex;
  justify-content: flex-end;

  background-color: ${COLOR_GREY};
`;

export const FooterLink = styled(Link)`
  margin-right: 20px;

  color: ${COLOR_BLUE};
  text-decoration-color: ${COLOR_GREY};

  underline: "hover";
`;
