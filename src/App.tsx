import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from './providers/theme-provider';
import Header from './components/Header';

export default function App() {
  return (
    <ThemeProvider >
      <Router>
        <Header />
      </Router>
    </ThemeProvider>
  )
}
