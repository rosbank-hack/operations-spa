import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Title from 'components/common/Title';
import TitleContainer from 'components/TitleContainer';

const Extra = ({ className }) => {
  return (
    <div className={className}>
      <TitleContainer>
        <Title>Экстра</Title>
      </TitleContainer>
    </div>
  );
};

const StyledExtra = styled(Extra)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default withRouter(StyledExtra);
