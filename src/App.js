// STYLED-COMPONENTS THEME PROVIDER
import { ThemeProvider } from 'styled-components';
// GLOBAL STYLES
import Global from './styles/Global';
// COMPONENTS
import Content from './components/Content';

const theme = {
  colors: {
    'Very Dark Gray': 'hsl(0, 0%, 17%)',
    'Dark Gray': 'hsl(0, 0%, 59%)'
  }
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Global />
      <Content />
    </ThemeProvider>
  );
}

export default App;
