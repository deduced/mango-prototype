import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      margin-top: 0;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Da Blog!
    </NavLink>

    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink activeClassName="current-page" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="current-page" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="current-page" to="/dashboard">
        Dashboard
      </NavLink>
    </nav>
  </header>
);

export default Header;
