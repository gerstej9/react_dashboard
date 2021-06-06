import retrieveObject from '../api/api-call.js';
import leaderboardQuery from '../api/leaderboard-query.js';

let initialState = {
  leaderboard: [],
}

export default function leaderboardReducer( state = initialState, action ){

  let { type, payload } = action;

  switch(type){
    case "GET_LEADERBOARD":
      return {
        leaderboard: payload.v2Leaderboard,
      };
      default:
        return state;
  };
}

export const getLeaderboard = ()  => async (dispatch) => {
  try{
    const leaderboard =  await retrieveObject(leaderboardQuery());
    return(
      dispatch({
        type: 'GET_LEADERBOARD',
        payload: leaderboard,
      })
    )
  } catch{
    return{
      type: "GET_LEADERBOARD",
      payload: []
    }
  }
};