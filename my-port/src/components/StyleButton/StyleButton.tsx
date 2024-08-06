import { styled } from "@mui/material";
import { ReactNode } from "react";


interface StyleButtonProps {
    children: ReactNode
}


const StyledButton: React.FC<StyleButtonProps> = ({children}) => {
    
    const StyledButton = styled("button")(({theme}) => ({
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.contrastText}`,
      borderRadius: '3px',
      
      width: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      
      cursor: 'pointer',
      color: theme.palette.primary.contrastText,
      transition: 'background-color 0.3s ease',
    
      '&:hover': {
        backgroundColor: "white",
        color: "black",
      }
  }
));
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

export default StyledButton;