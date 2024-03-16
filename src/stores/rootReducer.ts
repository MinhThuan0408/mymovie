
// import { history } from '@/utils/history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import homePageSlice from '../stores/reducer/homePageSlice';
// import { history } from '../utils/history';
import { history } from '../utils/history';



const cloneRootReducer = combineReducers({
  router: connectRouter(history),
  homePage: homePageSlice,
});

const rootReducer = (state: any, action: any) => {
  return cloneRootReducer(state, action);
};

export default rootReducer;
