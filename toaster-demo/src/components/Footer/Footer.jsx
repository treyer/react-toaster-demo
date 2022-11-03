import { FooterBox, FooterLink } from "../Footer/components";
import Toolbar from "@mui/material/Toolbar";

function Footer() {
  return (
    <footer>
      <FooterBox>
        <Toolbar>
          <FooterLink
            href="https://github.com/treyer/awesome-toasts"
            target={"_blank"}
          >
            Project GitHub
          </FooterLink>
          <FooterLink
            href="https://www.npmjs.com/package/react-toaster-lib"
            target={"_blank"}
          >
            Project on npm
          </FooterLink>
        </Toolbar>
      </FooterBox>
    </footer>
  );
}

export default Footer;
