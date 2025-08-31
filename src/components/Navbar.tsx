import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #007AFF;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(motion.a)`
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection('hero')}
        >
          Bilal Mahmood
        </Logo>
        
        <NavLinks>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('about')}
          >
            About
          </NavLink>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </NavLink>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </NavLink>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContainer>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink onClick={() => scrollToSection('about')}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('projects')}>
              Projects
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('skills')}>
              Skills
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('contact')}>
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
