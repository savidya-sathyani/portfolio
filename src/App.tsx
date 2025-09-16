import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './providers/theme-provider';
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <header className="main h-screen flex flex-col">
          <Header />
          <Hero />
        </header>
        <main></main>
      </Router>
    </ThemeProvider>
  );
}
