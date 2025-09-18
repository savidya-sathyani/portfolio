import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './providers/theme-provider';
import Header from './components/Header';
import Hero from './components/Hero';
import Specializations from './components/Specializations';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <header className="header">
          <Header />
          <Hero />
        </header>
        <main className="">
          <Specializations />
        </main>
      </Router>
    </ThemeProvider>
  );
}
