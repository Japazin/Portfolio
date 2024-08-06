import Avatar from "../../../../assets/img/WhatsApp Image 2024-02-29 at 21.34.12_8c6060b7.png";
import {Box, Container, Grid, Typography, styled } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyleButton/StyleButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../Background/Background";
import Project from "../Sobre/Project";
import Navbar from "../../../../components/Navbar/Navbar";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems:"center",
    
  }));

  const StyledImg = styled("img")(() => ({
    width: "70%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`
  }));
  const LinkContato = styled("a")(() => ({
    backgroundColor: 'transparent',
    padding: '5px 15px',
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: "none",
   
    cursor: 'pointer',
    color: theme.palette.primary.contrastText,
    
    '&:hover': {
      backgroundColor: "white",
      color: "black",}
}));

  return (
    <>
 <Navbar/>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                
                                    <AnimatedBackground />
                              
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
            <Grid item xs={12} md={7}  >
              <Typography
                color="primary.contrastText"
                variant="h3"
                textAlign="center"
                
              >
                Mateus Felipe
              </Typography>
              <Typography
                color="#f96262fb"
                variant="h3"
                textAlign="center" 
                
              >
               Desenvolvedor Full Stack
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} marginTop={2}>
                <Grid
                  item
                  display="flex"
                  justifyContent="center"

                >
                  <StyledButton>
                  <LinkContato href="https://wa.me/5531998393549">
                  <WhatsAppIcon />
                   <Typography> Contact me
                   </Typography></LinkContato> 
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <LinkContato  href="https://drive.google.com/file/d/1ZKT1MqSK45uCDMuq6eFydv5C_6gNP52T/view?usp=drive_link" ><GetAppIcon />
                    <Typography>
                    Download CV 
                    </Typography>
                    </LinkContato>
                  </StyledButton>
                </Grid>  
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
          <Project />
    </>
  );
};

export default Hero;
