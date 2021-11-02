import { useEffect } from 'react';
import { connect } from "react-redux";
import { getNmrPrice } from '../../store/nmr.reducer.js';
import { getLeaderboard } from '../../store/leaderboard.reducer.js';
import Collections from '../sections/Collections.jsx'
import Models from '../sections/Models.jsx'
import Performance from '../sections/Performance.jsx'

function HomePage(props){
  
  useEffect (() => {
    props.getNmrPrice();
    props.getLeaderboard();
  }, [])

  console.log(props.leaderboard.topTen);

  return (
    <div>
      <h1>${props.nmr.nmrPrice}</h1>
      <Collections/>
      <Models/>
      <Performance/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    nmr: state.nmr,
    leaderboard: state.leaderboard,
  }
}

const mapDispatchToProps = {
  getNmrPrice,
  getLeaderboard,
}


export default connect( mapStateToProps, mapDispatchToProps)(HomePage);