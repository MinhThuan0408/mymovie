import { Action, configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { ThunkAction } from 'redux-thunk';
import { history } from '../utils/history';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export enum keyReduxPersist {
  KEY = 'root',
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, routerMiddleware(history)),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

if ((module as any).hot) {
  (module as any).hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
