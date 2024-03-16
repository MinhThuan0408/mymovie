/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import DetailMoviePage from '../Detail/DetailMoviePage';
import HomePage from '../Home/HomePage';
import Header from '../component/Header';

const DashBoardComponent = () => {

  return (
    <>
      <Header />

      <div className="main-content">
        <Suspense fallback={'Loading'}>
          {/* <Route path={'/'} component={HomePage} /> */}
          <Route path={'/home'} component={HomePage} />
          <Route path={'/movie/:id'} component={DetailMoviePage} />
          {/* {routes.map(
            ({
              component: Component,
              path,
              ...rest
            }) => {
              return (
                <Route
                  path={path}
                  key={path}
                  exact={true}
                  component={() => <Component path={path} {...rest} />}
                />
              );
            }
          )} */}

        </Suspense>
      </div>
    </>
  );
};

export default DashBoardComponent;
