import CreateGlobalStyle from './styles/Global'
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './styles/Theme';
import Board from './components/Board/Board';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Board />
      <CreateGlobalStyle />
    </ThemeProvider>
  )
}

export default App
