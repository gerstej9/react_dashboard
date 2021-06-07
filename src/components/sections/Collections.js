function Collections(){
  return(
    <section>
      <div class = "section-heading">
        <h2>Saved Collections</h2>
        <div class = "section-controls">
          <input type = "text" id = "collection-name" />
          <button id = "add-collection-button" class = "section-button">
            <i class="fa fa-plus"></i>New Collection
          </button>
        </div>
      </div>
      <ul class = "existing-collections collection-list">
        <li>Top Ten</li>
      </ul>
    </section>
  )
};

export default Collections;