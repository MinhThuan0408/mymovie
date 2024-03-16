import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import DashBoardComponent from './features/Dashboard/DashBoardComponent';
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <DashBoardComponent />
      </Switch>
    </Router>
  );
}

export default App;
