import { Page } from './App.styled';
import { HomePage } from './pages/index';
import { createTheme, colors, ThemeProvider } from '@material-ui/core';
import { grey } from '@mui/material/colors';


const theme = createTheme({
  palette:{
      primary:{
        main:'#fefefe'
      },
      secondary:{
        main:'#90CAF8'
      }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <HomePage />
      </Page>
    </ThemeProvider>
  );
}

export default App;
