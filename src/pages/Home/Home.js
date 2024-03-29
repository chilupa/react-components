import {
  Container,
  Grid,
  ListItem,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListSubheader,
} from '@mui/material';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const components = [
  { name: 'input', label: 'Input' },
  { name: 'button', label: 'Button' },
];

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToComponentPage = (path) => {
    navigate(path);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <Box sx={{ width: '100%' }}>
            <List>
              <ListSubheader>Components</ListSubheader>
              {components.map((component, index) => (
                <Box key={index}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() =>
                        handleNavigateToComponentPage(component.name)
                      }
                    >
                      <ListItemText primary={component.label} />
                    </ListItemButton>
                  </ListItem>
                  <Divider variant="full" component="li" />
                </Box>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item lg={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
