import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
          <Projects />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
