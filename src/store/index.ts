import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaWiddleware = createSagaMiddleware();

const middlewares = [sagaWiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaWiddleware.run(rootSaga);

export default store;
