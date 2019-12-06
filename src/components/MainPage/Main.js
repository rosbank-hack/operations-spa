import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Title from 'components/common/Title';
import TitleContainer from 'components/TitleContainer';
import Container from 'components/common/Container';
import { getPage } from '../../apis/example';

const Main = ({ className }) => {
  return (
    <div className={className}>
      <TitleContainer>
        <Title>Главная</Title>
      </TitleContainer>
      <Container>{getPage}</Container>
    </div>
  );
};

const StyledMain = styled(Main)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default withRouter(StyledMain);
