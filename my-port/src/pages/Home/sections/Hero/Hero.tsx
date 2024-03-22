import Avatar from "../../../../assets/img/WhatsApp Image 2024-02-29 at 21.34.12_8c6060b7.jpg";
import { Container, Grid, Typography, styled } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import MailIcon from "@mui/icons-material/Mail";
import StyledButton from "../../../../components/StyleButton/StyleButton";
const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Mateus Felipe
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <MailIcon />
                   <Typography>
                      Contact me
                   </Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <GetAppIcon />
                    <Typography>
                    Download CV
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
