export default function Usage (){
  return(
    <div>
      <section class = "about-us">
        <h2>Overview</h2>
        <p>This application allows for users to create collections of models so that they can compare performance of individual model and analyze collection performance as a whole. Below is a walk through of how to effectively use this site and the features this site offers. </p>
      </section>
      <section class = "about-us">
        <h2>
          Instructions
        </h2>
        <h5>Creating and Deleting Collections</h5>
        <p>
          To create a new model collection, click on the "+ New Collection" button in the top right corner of the "Saved Collections" section. Upon doing so, a text field will appear where you can input the desired name of your collection. Once you have entered your desired name, click on the "Create Collection" button next to the text field and you will see your newly created collection appear as an icon under the "Saved Collections" header. To delete a model collection, simply click on the "x" inside the model collection tile. NOTE: The Top Ten collection is a built in feature of the site and cannot be deleted.
        </p><br></br>
        <h5>Adding and Deleting Models from a Collection</h5>
        <p>To add models to a collection, input a single model name into the text field at the bottom of the "Models" section and click on the "+ Add Model" button. Upon doing so you will see a new tile populate with the model name. To delete a model simply click on the "x" within the model tile or to delete all models in a collection use the "Clear All" button in the top right corner of the "Models" section. NOTE: After you have finished adding or deleting models, the "Save Collection" button in the top right corner must be clicked for changes to be saved.</p>
      </section>
      <section class = "about-us">
        <h2>
          Features
        </h2>
        <h5>Top Ten</h5>
        <p>
          The Top Ten collection auto-populates on each page load and can be used as a reference to see how a user's model collections are performing in contrast to the top ranking models at any given time.
        </p><br></br>
        <h5>Performance</h5>
        <p>
          The "Performance" section provides the range of live rounds at the time of viewing, the latest reported NMR price and three tables; model details, collection performance in terms of NMR and USD equivalent, and average correlation and MMC of the collection as a whole for each live round and average values for all four rounds combined.
        </p><br></br>
        <h5>Model Details</h5>
        <p>
          The model details table can be sorted by ascending or descending values for each of the columns by clicking on any of the column headers. Correlation, MMC, NMR staked, and NMR payout for each live round for individual models can be found by clicking on any given model row. These individual model details also provide average correlation and MMC values across all live rounds. NOTE: Models that do not have submissions for any of the four live rounds will be given 0.00 values for each category.
        </p><br></br>
        <h5>Collection Storage</h5>
        <p>
          All data from model collections are stored in local storage meaning your collections are private and not stored in any central database. As a result, however, visiting the site using a mobile phone and browsing in the "private" mode will prevent persistence of model collections. 
        </p>
      </section>
    </div>
  )
}