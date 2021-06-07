function Models(){
  return(
    <section>
      <div class = "section-heading"> 
        <h2>Models</h2>
      </div>
      <ul id = "model-list" class = "collection-list">
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

export default Models