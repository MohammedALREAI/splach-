import { photosReducers } from './photos/photos.reducer';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//-----------------------|| setUp  config  ||-----------------------//

const reducers = combineReducers({
  photos: photosReducers,

});


const middleware = [thunk];

const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

console.log('data -----3 ', Store.getState());

export type TState = ReturnType<typeof reducers>;

export type AppDispatch = typeof Store.dispatch;
(window as any).store = Store;
//-----------------------|| used  store  ||-----------------------//

export default Store;
