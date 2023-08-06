import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

import noteTaker from '../asses/noteTaker.png'
// import rype from '../asses/rype.png'
// import techBlog from '../asses/techBlog.png'
// import textEditor from '../asses/textEditor.png'


function Portfolio() {
    return (
     
      <section className='porfolio-noteTaker'>
        
        <div className='link-noteTaker'>
        <a 
        className='link-noteTaker'
        href="https://fathomless-coast-62859-4d8464296632.herokuapp.com" 
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={noteTaker} 
        className='img-noteTaker'
         alt= 'noteTaker' /></a
        >
        <a className='github-logo' href="https://github.com/hsaagal78/noteTakerCode"><FontAwesomeIcon icon={faGithub} /></a>
        <h1>Note Taker</h1>
         <h2>App that allwos user to create,update and delete notes</h2>
         
       </div>
        
      </section>
    )
  }
  
  export default Portfolio;

