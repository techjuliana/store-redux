import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMinddleware from 'redux-saga'
import rootSaga from './modules/rootSaga';
export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMinddleware();

const middlewares = [sagaMiddleware]

const store =  createStore (
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
  
  );

  sagaMiddleware.run(rootSaga)

export default store;