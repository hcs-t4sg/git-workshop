import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import 'NhiCardTemplate'

// Place card imports here!
import CardTemplate from './CardTemplate';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0BC793",
      contrastText: "#fff"
    }
  }

});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="white" noWrap>
              T4SGit
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                T4SGit
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Welcome to the T4SG Git workshop!
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary" paragraph>
                Future Description.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <NhiCardTemplate/>
              <CardTemplate />
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Created by the T4SG SWE Summer Committee 2022
          </Typography>
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </div>
  );
}

export default App;
