import { Box, ThemeProvider, Typography } from '@mui/material';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { muiTheme } from './utils/muiTheme';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
