import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import nmrReducer from './nmr.reducer.js';
import leaderboardReducer from './leaderboard.reducer.js';


let reducers = combineReducers({
  nmr: nmrReducer,
  leaderboard: leaderboardReducer,
})

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;