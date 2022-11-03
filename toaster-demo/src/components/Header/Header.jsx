import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Logo } from "./components";

function Header() {
  return (
    <header>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Logo variant="h6" component="div">
              React Toaster Library
            </Logo>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Header;
