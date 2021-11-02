import { useEffect } from 'react';
import { connect } from "react-redux";
import { getUserProfile } from '../../store/user-profile.reducer.js';
import '../../styles/modules.css'


function Performance(props){

  useEffect(() => {
    if(props.leaderboard.topTen[0]){
      props.getUserProfile(props.leaderboard.topTen[0].username)
    }
  }, [props.leaderboard.topTen])

  console.log(props.userProfile.userProfile);

  return(
  <section id = "user-detail">
    <h2>Performance</h2>
    <div class="loader-detail"></div>
    <div id = "detail-header"></div>
    <div id = "hide-on-load">
      <h2 id ="user">Collection:</h2>
      <p id = "modal-info">Click on each model to view metrics of live round performance<span id ="mobile-scroll">. Scroll right for more details.</span></p>
      <div class = "titleRow monkey">
        <p id = "model-name-title"><span id = "model-margin">Model</span><i class="fa"></i></p>
        <p id = "total-staked-title">NMR Staked<i class="fa"></i></p>
        <p id = "payout-title">NMR Payout<i class="fa"></i></p>
        <p id = "daily-change-title">NMR Daily Change<i class="fa"></i></p>
        <p id = "prev-rank-title">Prev Corr Rank<i class="fa"></i></p>
        <p id = "rank-title">Rank<i class="fa"></i></p>
        <p id = "mmc-rank-title">MMC Rank<i class="fa"></i></p>
      </div>
      <div class = "model-detail-row-section">
      </div>
    </div>
  </section>
  )
}


const mapStateToProps = state => {
  return {
    userProfile: state.userProfile,
    leaderboard: state.leaderboard,
  }
}

const mapDispatchToProps = {
  getUserProfile,
}


export default connect( mapStateToProps, mapDispatchToProps)(Performance);