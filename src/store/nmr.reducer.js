import retrieveObject from '../api/api-call.js';
import nmrQuery from '../api/nmr-query.js';

let initialState = {
  nmrPrice: 0.00,
}

export default function nmrReducer( state = initialState, action ){

  let { type, payload } = action;

  switch(type){
    case "GET_NMR_PRICE":
      return {
        nmrPrice: Number(payload.latestNmrPrice.priceUsd).toFixed(2),
      };
      default:
        return state;
  };
}

export const getNmrPrice = ()  => async (dispatch) => {
  try{
    const nmrPrice =  await retrieveObject(nmrQuery());
    return(
      dispatch({
        type: 'GET_NMR_PRICE',
        payload: nmrPrice
      })
    )
  } catch{
    return{
      type: "GET_NMR_PRICE",
      payload: 0.00
    }
  }
};