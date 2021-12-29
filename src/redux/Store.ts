import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//-----------------------|| setUp  config  ||-----------------------//

const reducers = combineReducers({});

const initialState = {};

const middleware = [thunk];

const Store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

console.log('data -----3 ', Store.getState());

export type TState = ReturnType<typeof reducers>;

export type AppDispatch = typeof Store.dispatch;
declare const Window: any;

Window.store = Store;
//-----------------------|| used  store  ||-----------------------//

export default Store;
