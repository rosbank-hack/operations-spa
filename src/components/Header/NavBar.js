import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = ({ className }) => (
  <div className={className}>
    <NavLink to="/main">Главная</NavLink>
    <NavLink to="/extra">Экстра</NavLink>
    <NavLink to="/not_found">Несуществующая</NavLink>
  </div>
);

const StyledNavBar = styled(NavBar)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-left: 30px;
  overflow-x: scroll;
  a {
    text-decoration: none;
    color: #000;
    line-height: 80px;
    border-bottom: 2px solid transparent;
    &.active {
      border-bottom: 2px solid rgb(221, 0, 31);
    }
  }
  a + a {
    margin-left: 10px;
  }
`;

export default StyledNavBar;
