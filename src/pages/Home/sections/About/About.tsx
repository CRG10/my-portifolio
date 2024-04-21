import React, { forwardRef } from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';

const Footer = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    textAlign: "center",
}));

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <Footer> {/* Use o componente Footer para aplicar o estilo de footer */}
        <Box ref={ref as React.RefObject<HTMLDivElement>} py={4} textAlign="center">
          <Typography variant="h3" gutterBottom>About</Typography>
        </Box>
      </Footer>
    </>
  );
});

export default About;
