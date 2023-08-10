import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

function Footer(propsObj) {
  
    const date = new Date();
    const year = date.getFullYear();
  
    return (
      <footer className="row justify-between">
        <p>&copy; {year}</p>
        <a className='footergithub-logo' href="https://github.com/hsaagal78/"><FontAwesomeIcon icon={faGithub} /></a>
        <a className='footerLinke-logo' href="https://github.com/hsaagal78/"><FontAwesomeIcon icon={faLinkedin} /></a>

        <p className="footerP">Dev'd and Designed by Hernan Sagal</p>

      </footer>
    )
  }
  
  export default Footer;