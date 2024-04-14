import React from 'react'
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
// import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Nav = styled.div`
   background-color: ${({ theme }) => theme.card_light};
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;
   @media screen and (max-width: 960px) {
    transition: 0.8s all ease;      
   }
`;

const NavContainer = styled.div`
   height: 60px;
   display: flex;
   justify-content: space-between;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
   width: 80%;
   padding: 0 6px;
   display: flex;
   justify-self: flex-start;
   align-items: center;
   text-decoration: none;
   cursor: pointer;
   @media screen and (max-width: 640px) {
    padding: 0 0px;
   }
`;

const MobileIcon = styled.div`
   display: none;
   @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
   }
`;

const NavItems = styled.ul`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   list-style: none;
   gap: 32px;
   @media screen and (max-width: 768px) {
    display: none;
   }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500; 
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  height: 70%;
  padding: 0px 20px;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    position: absolute;
    top: 80;
    right: 0;
    width: 35%;
    padding: 220px 40px 20px 25px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // Close the mobile menu after scrolling
    }
  };

  const handleGithubButtonClick = () => {
    const githubProfileUrl = "https://github.com/Rohitbadekar-639";
    window.open(githubProfileUrl, "_blank"); // Open GitHub profile in a new tab
  };

  return (
    <Nav>
      <NavContainer>
      <NavLogo to='/'>
          <href 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              color: "white", 
              marginBottom: "20;", 
              cursor: "pointer", 
            }}>
            <DiCssdeck size="3rem" /> <Span href='/'>Portfolio</Span>
          </href>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setOpen(!open)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton onClick={handleGithubButtonClick}>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer> 
        
        {open && <MobileMenu open={open}>
          <MobileMenuLinks onClick={() => scrollToSection("about")}>About</MobileMenuLinks>
          <MobileMenuLinks onClick={() => scrollToSection("skills")}>Skills</MobileMenuLinks>
          <MobileMenuLinks onClick={() => scrollToSection("experience")}>Experience</MobileMenuLinks>
          <MobileMenuLinks onClick={() => scrollToSection("projects")}>Projects</MobileMenuLinks>
          <MobileMenuLinks onClick={() => scrollToSection("education")}>Education</MobileMenuLinks>
          <MobileMenuLinks onClick={() => scrollToSection("contact")}>Contact</MobileMenuLinks>
          <GithubButton style={{padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content'}} 
            onClick={handleGithubButtonClick}>Github Profile</GithubButton>
        </MobileMenu>}
    </Nav> 
  );
};

export default Navbar

