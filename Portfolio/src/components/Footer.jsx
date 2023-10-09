import reactLogo from '../assets/react.svg'
import githubLogo from '../assets/github-mark.png'
import linkedInLogo from '../assets/linkedIn.png'
import facebookLogo from '../assets/facebook.jpg'
import './Footer.css'



function Footer() {

  return <>
    <div>
      <a href="https://github.com/SamBeekman" target="_blank">
        <img src={githubLogo} className="logo" alt="Github logo" />
      </a>

      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <a href="https://www.linkedin.com/in/sam-beekman/" target="_blank">
        <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
      </a>

      {/* -----3rd Platform -------- */}
      <a href="https://www.facebook.com/sam.beekman" target="_blank">
        <img src={facebookLogo} className="logo" alt="Facebook logo" />
      </a>
    </div>
  </>
}

export default Footer;