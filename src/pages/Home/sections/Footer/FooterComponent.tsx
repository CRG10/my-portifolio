import { Box, Typography, Link, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    textAlign: "center",
  }));
  
  const IconWrapper = styled(Box)(({ theme }) => ({
    display: "inline-block",
    margin: theme.spacing(0, 1),
  }));

const FooterComponent = () => {
  return (
    <Footer>
      <Box>
        <Typography variant="body1">© 2024 Christian Rocha Gomes</Typography>
        <Typography variant="body2">Todos os direitos reservados.</Typography>
        <Link href="#Direitos_Autorais" color="inherit">Política de Privacidade</Link>
      </Box>
      <Box mt={2}>
        <IconWrapper>
          <Link href="https://www.linkedin.com/in/christian-rocha-389793235/" color="inherit" target="_blank">
            <LinkedInIcon />
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Link href="https://github.com/CRG10" color="inherit" target="_blank">
            <GitHubIcon />
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Link href="mailto:chrisr10gomescrg@gmail.com" color="inherit">
            <EmailIcon />
          </Link>
        </IconWrapper>
      </Box>    
      <Box mt={2}>
        <Typography variant="body2">
          <Link href="https://instagram.com/chri5_rocha" color="inherit" target="_blank">
            Desenvolvido por{" Christian Rocha Gomes"}
          </Link>
        </Typography>
      </Box>
    </Footer>
  );
};

export default FooterComponent;