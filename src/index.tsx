// import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './stores';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);

reportWebVitals();
