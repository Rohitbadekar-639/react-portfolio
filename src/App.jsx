import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/index.jsx";
import HeroSection from "./components/HeroSection/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Education from "./components/Education/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { Suspense, lazy } from 'react';

const LazyProjects = lazy(() => import('./components/Projects/index.jsx'));
const LazyEducation = lazy(() => import('./components/Education/index.jsx'));
const LazyContact = lazy(() => import('./components/Contact/index.jsx'));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
  );
  width: 100%;
  clip-path: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Suspense fallback={<div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
            <LazyProjects />
          </Suspense>
          <Wrapper>
            <Suspense fallback={<div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
              <LazyEducation />
            </Suspense>
            <Suspense fallback={<div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
              <LazyContact />
            </Suspense>
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
