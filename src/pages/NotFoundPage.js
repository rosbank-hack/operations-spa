import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFoundPage = () => {
  return <div>Что-то, где-то Вы не там!</div>;
};

export default withRouter(NotFoundPage);
