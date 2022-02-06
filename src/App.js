import Header from './components/Header'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/Global'

const theme= {
  colors: {
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
   <Header />
   </ThemeProvider>
  );
}

export default App;
