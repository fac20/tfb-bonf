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
  margin: 1rem 0;
  max-width: 10rem;
  padding: 0.5rem 1rem;
  &:hover {
    background: hsl(208, 99%, 69%);
  }
`;

export const Nav = styled.nav`
  background-color: #111; /* Black*/
  height: 100%; /* 100% Full-height */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 4rem; /* Place content 60px from the top */
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
`;

/* The sidebar links */
export const Anchor = styled.a`
  color: hsl(0, 0%, 50.6%);
  display: block;
  font-size: 1.5em;
  padding: 0.5rem 0;
  text-decoration: none;
  transition: 0.3s;
  /* When you mouse over the navigation links, change their color */
  &:hover {
    color: white;
  }
`;

export const UL = styled.ul`
  list-style-type: none;
  margin: auto;
`;

// @media screen and (max-height: 450px) {
//   nav {
//     padding-top: 15px;
//   }
//   nav a {
//     font-size: 18px;
//   }
// }
