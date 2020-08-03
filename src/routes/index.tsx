import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Restaurant from '../pages/Restaurant';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/restaurant" component={Restaurant} />
    </Switch>
  );
};

export default Routes;
