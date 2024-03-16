import { Action, configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import { ThunkAction } from 'redux-thunk';
import { history } from '../utils/history';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export enum keyReduxPersist {
  KEY = 'root',
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: keyReduxPersist.KEY,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // thunk: true,
      serializableCheck: false,
      // immutableCheck: false,
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
