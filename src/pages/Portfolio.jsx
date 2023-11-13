import './Portfolio.css';
import Project from '../components/Project';

const myProjects = [
  {
    title: 'Samagotchi Virtual Pet',
    github: "https://github.com/SamBeekman/Samagotchi",
    deployed: "https://samagotchi-38024e671c79.herokuapp.com/",
    image: "/Samagotchi.png",
    altText: "virtual pet game"
  },
  {
    title: 'E-Commerce Fashion Site',
    github: "https://github.com/SamBeekman/E-commerce-fashion-store",
    deployed: "https://fashion404-1b1ca75a43ac.herokuapp.com/",
    image: "/ecommerce.jpg",
    altText: "e-commerce fashion website"
  },
  {
    title: 'Spotify Playlist Gig Finder',
    github: "https://github.com/SamBeekman/Spotify-Gig-Finder-App",
    deployed: "https://sambeekman.github.io/Spotify-Gig-Finder-App/",
    image: "/Project1.png",
    altText: "Spotify gig finder showing map and available tickets"
  },
  {
    title: 'Weather App',
    github: "https://github.com/SamBeekman/Weather-Forecast-App",
    deployed: "https://sambeekman.github.io/Weather-Forecast-App/",
    image: "/weather-app.jpg",
    altText: "5 day weather forecast with icons displaying current weather and weather attributes"
  },
  {
    title: 'Password Generator',
    github: "https://github.com/SamBeekman/Password-Generator",
    deployed: "https://sambeekman.github.io/Password-Generator/",
    image: "/password-generator.png",
    altText: "page with red clickable button that says 'generate pasword'"
  },
  {
    title: 'Prework Study Guide',
    github: "https://github.com/SamBeekman/prework-study-guide",
    deployed: "https://sambeekman.github.io/prework-study-guide/",
    image: "/prework.png",
    altText: "prework study guide"
  }
]


export default function Portfolio() {
  return (

    <div>
      <br />
      <br />
      <h6>Titles link to Github ------ Images link to Application</h6>

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
