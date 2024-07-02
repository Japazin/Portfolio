import Avatar from "../../../../assets/img/WhatsApp Image 2024-02-29 at 21.34.12_8c6060b7.png";
import {Box, Container, Grid, Typography, styled } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyleButton/StyleButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../Background/Background";

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
  const LinkContato = styled("a")`
  text-decoration: none;
  color: inherit;
`;
  return (
    <>
 
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
                variant="h2"
                textAlign="center"
                
              >
                Mateus Felipe
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
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
                  <WhatsAppIcon />
                   <Typography>
                  <LinkContato href="https://wa.me/5531998393549"> Contact me</LinkContato> 
                   </Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <GetAppIcon />
                    <Typography>
                    <LinkContato href="https://drive.google.com/file/d/1ZKT1MqSK45uCDMuq6eFydv5C_6gNP52T/view?usp=drive_link"  >Download CV</LinkContato> 
                    </Typography>
                  </StyledButton>
                </Grid>  
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
