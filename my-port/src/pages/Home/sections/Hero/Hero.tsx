import Avatar from "../../../../assets/img/WhatsApp Image 2024-02-29 at 21.34.12_8c6060b7.jpg";
import { Button, Container, Grid, Typography, styled } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import MailIcon from "@mui/icons-material/Mail";
const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Mateus Felipe
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                I'm a Software Engineer
              </Typography>
              <Grid container>
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                  <Button>
                    <MailIcon />
                    Contact me
                  </Button>
                </Grid>
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                  <Button>
                    <GetAppIcon />
                    Download CV
                  </Button>
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
