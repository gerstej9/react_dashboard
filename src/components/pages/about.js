export default function About (){
  return(
    <div>
      <section class = "about-us">
        <h2>Overview</h2>
        <p>As a Numerai user I wanted to have a way to compare the performance of all my models side by side. Some existing applications do a great job of allowing certain comparisons but did not provide all the features I was looking for. As a result I decided to create an application myself which would allow me to gain insight into my model performances.</p>
      </section>
      <section class = "about-us">
        <h2>
          About the Creator
        </h2>
        <p>
          A Pacific Northwest local, James Gerstenberger is an avid Numerai fan and competitor and at the time of writing has several models ranked in the top 100. James has recently transitioned into Software Development after attending Codefellows coding academy with previous work focused on biopharmaceuticals and more recently intellectual property in the cannabis industry.
        </p>
        <div id = "contact-info">
          <a href = "https://www.linkedin.com/in/james-gerstenberger/">LinkedIn</a>
          <h4><a id = "chat-link" href = "https://community.numer.ai/home">Numerai Chat:</a> james.g9</h4>
        </div>
        <div class = "creator-image">
          {/* <img id = "creator" src="/assets/IMG_2792.PNG" alt="Dashboard Createor"/> */}
        </div>
      </section>
    </div>
  )
}