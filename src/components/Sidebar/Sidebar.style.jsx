import styled from 'styled-components';

export const LogoutButton = styled.button`
  background-color: white;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 4px 4px 0 hsl(0, 0%, 50.6%);
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  font-weight: 1000;
  margin: 1.5rem 0;
  max-width: 10rem;
  padding: 0.5rem 1rem;
  &:hover {
    background: hsl(208, 99%, 69%);
  }
`;

export const Nav = styled.nav`
  background-color: black;
  height: 100%;
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 1rem;
  position: fixed; /* Stay in place */
  top: 0;
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
  width: 0; /* 0 width - change this with JavaScript */
  z-index: 1; /* Stay on top */
`;

/* Position and style the close button (top right corner) */
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  position: absolute;
  right: 1rem;
  top: 0;
`;

export const OpenButton = styled(CloseButton)`
  color: hsl(0, 0%, 20%);
  left: 1rem;
  position: fixed;
`;

/* The sidebar links */
export const Anchor = styled.a`
  color: white;
  display: block;
  font-size: 1.5em;
  padding: 0.5rem 0;
  text-decoration: none;
  transition: 0.3s;
  width: max-content;
  &:hover {
    color: hsl(208, 99%, 69%);
  }
`;

export const UL = styled.ul`
  list-style-type: none;
  position: absolute;
  right: 2rem;
`;

export const LogoImage = styled.img`
  max-width: 5rem;
  margin-bottom: 0.5rem;
`;

export const LogoImageClose = styled.img`
  position: fixed;
  left: 4rem;
  height: 3rem;
  margin: 0.5rem;
  z-index: -1;
`;
