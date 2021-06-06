import { useEffect } from 'react';
import { connect } from "react-redux";
import { getNmrPrice } from '../../store/nmr.reducer.js';


function HomePage(props){
  
  useEffect (() => {
    props.getNmrPrice();
  }, [])

  console.log(props.nmr);

  return (
    <h1>${props.nmr.nmrPrice}</h1>
  )
}

const mapStateToProps = state => {
  return {
    nmr: state.nmr,
  }
}

const mapDispatchToProps = {
  getNmrPrice,
}


export default connect( mapStateToProps, mapDispatchToProps)(HomePage);