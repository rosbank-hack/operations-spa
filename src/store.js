import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history) {
  return createStore(createRootReducer(history), composeEnhancers(applyMiddleware(routerMiddleware(history))));
}
