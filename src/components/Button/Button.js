import { Person, Send } from '@mui/icons-material';
import {
  Grid,
  Button as MuiButton,
  Typography,
  Box,
  IconButton,
  Divider,
} from '@mui/material';
import React from 'react';
import Layout from '../Layout/Layout';

const Button = () => {
  return (
    <Layout>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography fontWeight={600} pb={1} variant="body1">
            Contained
          </Typography>
          <Box display="flex" gap={1}>
            <Box>
              <MuiButton>Submit</MuiButton>
            </Box>
            <Box>
              <MuiButton sx={{ textTransform: 'none' }}>Send</MuiButton>
            </Box>
            <Box>
              <MuiButton startIcon={<Send />}>Send</MuiButton>
            </Box>
            <Box>
              <IconButton color="primary">
                <Person />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Typography fontWeight={600} pb={1} variant="body1">
            Filled
          </Typography>
          <Box display="flex" gap={1}>
            <Box>
              <MuiButton variant="filled">Submit</MuiButton>
            </Box>
            <Box>
              <MuiButton variant="filled">Send</MuiButton>
            </Box>
            <Box>
              <MuiButton variant="filled" startIcon={<Send />}>
                Send
              </MuiButton>
            </Box>
            <Box>
              <IconButton color="primary">
                <Person />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Typography fontWeight={600} pb={1} variant="body1">
            Outlined
          </Typography>
          <Box display="flex" gap={1}>
            <Box>
              <MuiButton variant="outlined">Submit</MuiButton>
            </Box>
            <Box>
              <MuiButton variant="outlined">Send</MuiButton>
            </Box>
            <Box>
              <MuiButton variant="outlined" startIcon={<Send />}>
                Send
              </MuiButton>
            </Box>
            <Box>
              <IconButton color="primary">
                <Person />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Button;
