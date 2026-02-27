import React, { useEffect, useRef } from 'react';
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Nav = styled.div`
   background-color: ${({ theme }) => theme.card_light};
   padding-top: 10px;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;
   @media screen and (max-width: 768px) {
      transition: 0.8s all ease;      
   }
`;

const NavContainer = styled.div`
   height: 80px;
   display: flex;
   justify-content: space-between;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1150px;
`;

const NavLogo = styled(LinkR)`
   display: flex;
   align-items: center;
   text-decoration: none;
   cursor: pointer;
   color: white;

   @media screen and (max-width: 640px) {
      padding: 0;
   }
`;

const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      right: 0;
      transform: translate(-100%, 50%);
      font-size: 1.8rem;
      cursor: pointer;
      color: ${({ theme }) => theme.text_primary};
   }
`;

const NavItems = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
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
  width: auto;
  height: 100%;

  @media screen and (max-width: 768px) {
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
  height: 50%;
  padding: 0px 20px;

  &:hover {
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
    top: 80px;
    right: 0;
    width: 50%;
    padding: 20px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};

    @media screen and (min-width: 640px) {
      display: none;
    }
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
  const mobileMenuRef = useRef(null);
  const mobileIconRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (open && !mobileMenuRef.current.contains(event.target) && !mobileIconRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); 
    }
  };

  const handleGithubButtonClick = () => {
    const githubProfileUrl = "https://github.com/Rohitbadekar-639";
    window.open(githubProfileUrl, "_blank"); 
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </NavLogo>
        <MobileIcon ref={mobileIconRef}>
          <FaBars onClick={toggleMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about' aria-label="Navigate to About section">About</NavLink>
          <NavLink href='#skills' aria-label="Navigate to Skills section">Skills</NavLink>
          <NavLink href='#experience' aria-label="Navigate to Experience section">Experience</NavLink>
          <NavLink href='#projects' aria-label="Navigate to Projects section">Projects</NavLink>
          <NavLink href='#education' aria-label="Navigate to Education section">Education</NavLink>
          <NavLink href='#contact' aria-label="Navigate to Contact section">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton onClick={handleGithubButtonClick}>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      
      <MobileMenu ref={mobileMenuRef} open={open}>
      <MobileMenuLinks to='#about' onClick={() => scrollToSection("about")} aria-label="Navigate to About section">About</MobileMenuLinks>
        <MobileMenuLinks to='#skills' onClick={() => scrollToSection("skills")} aria-label="Navigate to Skills section">Skills</MobileMenuLinks>
        <MobileMenuLinks to='#experience' onClick={() => scrollToSection("experience")} aria-label="Navigate to Experience section">Experience</MobileMenuLinks>
        <MobileMenuLinks to='#projects' onClick={() => scrollToSection("projects")} aria-label="Navigate to Projects section">Projects</MobileMenuLinks>
        <MobileMenuLinks to='#education' onClick={() => scrollToSection("education")} aria-label="Navigate to Education section">Education</MobileMenuLinks>
        <MobileMenuLinks to='#contact' onClick={() => scrollToSection("contact")} aria-label="Navigate to Contact section">Contact</MobileMenuLinks>
        <GithubButton 
          style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} 
          onClick={handleGithubButtonClick}
          aria-label="Visit Rohit Badekar's GitHub profile"
        >
          Github Profile
        </GithubButton>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
