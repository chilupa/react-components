import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box p={2} sx={{ cursor: 'pointer' }}>
      <Typography fontWeight={600} variant="h3">
        React components
      </Typography>
    </Box>
  );
};

export default Header;
