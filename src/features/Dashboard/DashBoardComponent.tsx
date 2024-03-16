/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from 'react-router-dom';
import DetailMoviePage from '../Detail/DetailMoviePage';
import HomePage from '../Home/HomePage';

const DashBoardComponent = () => {

  return (

    <Switch>
      <Route path={'/'} component={HomePage} />
      <Route path={'/movie/:id'} component={DetailMoviePage} exact={true} />
      <Route path={'/home'} component={HomePage} exact={true} />
    </Switch>
  );
};

export default DashBoardComponent;
