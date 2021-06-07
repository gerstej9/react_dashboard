import retrieveObject from '../api/api-call.js';
import userProfileQuery from '../api/model-query.js';

let initialState = {
  userProfile: {}
}

export default function userProfileReducer( state = initialState, action ){

  let { type, payload } = action;

  switch(type){
    case "GET_USER_PROFILE":
      console.log(payload);
      return {
        userProfile: payload
      };
      default:
        return state;
  };
}

export const getUserProfile = (username)  => async (dispatch) => {
  try{
    const userProfile =  await retrieveObject(userProfileQuery(username));
    return(
      dispatch({
        type: 'GET_USER_PROFILE',
        payload: userProfile,
      })
    )
  } catch{
    return{
      type: "GET_USER_PROFILE",
      payload: {}
    }
  }
};