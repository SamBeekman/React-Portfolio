import './Portfolio.css';
import Project from '../components/Project';

const myProjects = [{
  title: 'E-Commerce Fashion Site',
  github: "https://github.com/SamBeekman/E-commerce-fashion-store",
  deployed: "https://fashion404-1b1ca75a43ac.herokuapp.com/",
  image: "./src/assets/ecommerce.jpg",
  altText: "e-commerce fashion website"
},
{
  title: 'Spotify Playlist Gig Finder',
  github: "https://github.com/SamBeekman/Spotify-Gig-Finder-App",
  deployed: "https://sambeekman.github.io/Spotify-Gig-Finder-App/",
  image: "./src/assets/Project1.png",
  altText: "Spotify gig finder showing map and available tickets"
},
{
  title: 'Weather App',
  github: "https://github.com/SamBeekman/Weather-Forecast-App",
  deployed: "https://sambeekman.github.io/Weather-Forecast-App/",
  image: "./src/assets/weather-app.jpg",
  altText: "5 day weather forecast with icons displaying current weather and weather attributes"
},
{
  title: 'Password Generator',
  github: "https://github.com/SamBeekman/Password-Generator",
  deployed: "https://sambeekman.github.io/Password-Generator/",
  image: "./src/assets/password-generator.png",
  altText: "page with red clickable button that says 'generate pasword'"
},
{
  title: 'CATerrific Landing Page',
  github: "https://github.com/SamBeekman/caterrific-landing-page",
  deployed: "https://sambeekman.github.io/caterrific-landing-page/",
  image: "./src/assets/CATerrific.png",
  altText: "cat breed information and adoption site"
},
{
  title: 'Prework Study Guide',
  github: "https://github.com/SamBeekman/prework-study-guide",
  deployed: "https://sambeekman.github.io/prework-study-guide/",
  image: "./src/assets/prework.png",
  altText: "prework study guide"
},
]


export default function Portfolio() {
  return (

    <div>

      <h6>Titles link to Gihub ------ Images link to Application</h6>

      <main className="container">

        {myProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            github={project.github}
            deployed={project.deployed}
            image={project.image}
            altText={project.altText}
          />
        ))}

      </main>
    </div>
  );
}



{/* <main class="container"> */ }
{/* <div class="item item-1">
          <h3><a href="https://github.com/SamBeekman/E-commerce-fashion-store">E-Commerce Fashion Site</a></h3><a href="https://fashion404-1b1ca75a43ac.herokuapp.com/"><img id="image" src="./src/assets/ecommerce.jpg" alt="e-commerce fashion website"></img></a>

        </div>
        <div class="item item-2">
          <h3><a href="https://github.com/SamBeekman/Spotify-Gig-Finder-App">Spotify Playlist Gig Finder</a></h3><a href="https://sambeekman.github.io/Spotify-Gig-Finder-App/"><img id="first-image" src="./src/assets/Project1.png" alt="Spotify gig finder showing map and available tickets"></img></a>

        </div>
        <div class="item item-3">
          <h3><a href="https://github.com/SamBeekman/Weather-Forecast-App">Weather App</a></h3><a href="https://sambeekman.github.io/Weather-Forecast-App/"><img id="image" src="./src/assets/weather-app.jpg" alt="5 day weather forecast with icons displaying current weather and weather attributes"></img></a>

        </div>
        <div class="item item-4">
          <h3><a href="https://github.com/SamBeekman/Password-Generator">Password Generator</a></h3><a href="https://sambeekman.github.io/Password-Generator/"><img id="image" src="./src/assets/password-generator.png" alt="page with red clickable button that says 'generate pasword'"></img></a>

        </div>
        <div class="item item-5">
          <h3><a href="https://github.com/SamBeekman/caterrific-landing-page">CATerrific Landing Page</a></h3><a href="https://sambeekman.github.io/caterrific-landing-page/"><img id="image" src="./src/assets/CATerrific.png" alt="cat breed information and adoption site"></img></a>

        </div>
        <div class="item item-6">
          <h3><a href="https://github.com/SamBeekman/prework-study-guide">Prework Study Guide</a></h3><a href="https://sambeekman.github.io/prework-study-guide/"><img id="image" src="./src/assets/prework.png" alt="prework study guide"></img></a>

        </div>
      </main> */}