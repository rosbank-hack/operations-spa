import React from 'react';
import styled from 'styled-components';
import { Link, Switch, Route } from 'react-router-dom';

import Container from 'components/common/Container';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ className }) => (
  <div className={className}>
    <Container>
      <Link to="/main">
        <Logo />
      </Link>
      <Switch>
        <Route component={NavBar} />
      </Switch>
    </Container>
  </div>
);

const StyledHeader = styled(Header)`
  background-color: #fff;
  ${Container} {
    height: 80px;
    display: flex;
    flex-direction: row;
    width: 100%;
    & > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default StyledHeader;
