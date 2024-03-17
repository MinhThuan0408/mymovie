import { Route, Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './features/component/Header';
import routes from './routes/routes';
import { history } from './utils/history';

function App() {

  return (
    <Router history={history}>
      <Header />
      <div className="main-content">
        {/* <Route path={'/movie/:id'} component={() => <DetailMoviePage />} exact={true} key={'/movie'} />
        <Route path={'/home'} component={() => <HomePage />} exact={true} key={'/home'} /> */}

        {routes.map(
          ({
            component: Component,
            path,
            exact
          }) => {
            return (
              <Route
                path={path}
                key={path}
                exact={exact}
                component={() => <Component path={path} />}
              />
            );
          }
        )}

      </div>

    </Router>
  );
}

export default App;
