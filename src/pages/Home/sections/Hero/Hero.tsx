import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimateBackground/AnimateBackground";
import Image from "../../../../assets/images/Christian.pdf" 
import FooterComponent from "../Footer/FooterComponent";
import About from "../About/About";
import Skils from "../Skils/skil";
import Projects from "../Projects/Projects";
const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    }))


    const StyledImg = styled("img")(()=> ({
        width: "350px", // Largura fixa em pixels
        height: "350px" ,
        borderRadius: "50%", 
        display: "flex", 
        border:`1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
       <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground></AnimatedBackground>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>    
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Christian Rocha</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" >I'm a Developer Web</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <a href={Image} download>
                                    <StyledButton onClick={() => console.log ("Download")}>
                                        <DownloadIcon/> 
                                        <Typography> 
                                            Download CV 
                                        </Typography>
                                    </StyledButton>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4}  display="flex" justifyContent="center">
                                <StyledButton onClick={() => console.log ("email")}> 
                                    <MailOutlineIcon/>
                                    <Typography> 
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
       </StyledHero>
       <About/>
       <Skils/>
       <Projects/>
       <FooterComponent /> 
      </>
    )
  }
  
  export default Hero
  