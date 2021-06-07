import { connect } from "react-redux";

function Models(props){
  return(
    <section>
      <div class = "section-heading"> 
        <h2>Models</h2>
      </div>
      <ul id = "model-list" class = "collection-list">
        {props.leaderboard.topTen.map((user, i) => {
          return(
          <li key={i}>{user.username}</li>
          )
        })}
      </ul>
      <div class = "section-footer">
        <input id = "model-to-add" class = "username-input" type = "text" name = "model"></input>
        <button id = "save-new-model" class = "section-button">
            <i class="fa fa-plus"></i>Add Model
          </button>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    leaderboard: state.leaderboard,
  }
}

export default connect( mapStateToProps)(Models);