import Avatar from "../../../../assets/img/WhatsApp Image 2024-02-29 at 21.34.12_8c6060b7.jpg";
import { styled } from "@mui/material";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
  }))

  const StyledImg = styled("img")(() => ({
    width: "30%",
    borderRadius:"50%"
  }))

  return (
  <>
  <StyledHero>
    <StyledImg src={Avatar} />
  </StyledHero>
</> 
) 
};

export default Hero;
