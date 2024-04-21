import React, { forwardRef } from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';

const Footer = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    textAlign: "center",
}));

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Footer>
      <Box ref={ref as React.RefObject<HTMLDivElement>} py={4} textAlign="center"> {/* Use a ref diretamente no Box */}
        <Typography variant="h3" gutterBottom>Projects</Typography>
      </Box>
    </Footer>

  );
});

export default Projects;
