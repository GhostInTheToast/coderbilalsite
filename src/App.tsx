import styled from 'styled-components';
import About from './components/About';
import Contact from './components/Contact';
import FloatingGhost from './components/FloatingGhost';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <FloatingGhost />
      <Navbar />
      <MainContent>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
