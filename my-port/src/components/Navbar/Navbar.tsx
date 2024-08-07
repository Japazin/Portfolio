
import { AppBar, Link, Toolbar, styled } from "@mui/material";


const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "black",
});

const StyledMenuItem = styled(Link)({
  color: " white", 
  transition: "color 0.3s", 
  '&:hover': {
    color: "grey", 
  },
});

const Navbar = () => {
  return (
    <AppBar position="absolute">
      <StyledToobar>
        <StyledMenuItem href="#sobre">Sobre</StyledMenuItem>
        <StyledMenuItem>Habilidades</StyledMenuItem>
        <StyledMenuItem>Projetos</StyledMenuItem>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
