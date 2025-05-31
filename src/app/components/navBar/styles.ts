import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #1e3a8a; /* bg-blue-900 */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  height: 55px;
  position: fixed;
  width: 100vw;
  z-index: 10; /* Ensure navbar stays above other content */
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 1rem; /* gap-4 */
  align-items: center;
`;

export const Logo = styled.span`
  font-weight: 700; /* font-bold */
`;

export const NavLink = styled.a`
  &:hover {
    text-decoration: underline; /* hover:underline */
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
`;

export const SearchInput = styled.input`
  padding: 0.25rem; /* p-1 */
  border-radius: 0.25rem; /* rounded */
  color: black; /* text-black */
  border: none;
  outline: none;
`;

export const LoginButton = styled.button`
  background-color: white;
  color: #1e3a8a; /* text-blue-900 */
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  border-radius: 0.25rem; /* rounded */
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
