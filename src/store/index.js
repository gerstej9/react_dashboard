import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


let reducers = combineReducers({
  
})

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;