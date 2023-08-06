import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

import noteTaker from '../asses/noteTaker.png'
import rype from '../asses/rype.png'
import techBlog from '../asses/techBlog.png'
import textEditor from '../asses/textEditor.png'
import codingQuiz from '../asses/codingQuiz.png'
import wheatherP from '../asses/wheatherP.png'



function Portfolio() {
    return (
     
      <section className='porfolio-noteTaker'>
        
        <div className='link-noteTaker'>
        <h1>Note Taker</h1>
         <h2>App that allwos user to create,update and delete notes</h2>
        <a 
        className='link-noteTaker'
        href="https://lit-caverns-20017-2064580b596c.herokuapp.com" 
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={noteTaker} 
        className='img-noteTaker'
         alt= 'noteTaker' /></a
        >
        <a className='github-logo' href="https://github.com/hsaagal78/noteTakerCode"><FontAwesomeIcon icon={faGithub} /></a>
       
         
       </div>
       <div className='link-noteTaker'>
        <h1>Text Editor</h1>
         <h2> Create,manage notes or code, regardless connectivity</h2>
        <a 
        className='link-noteTaker'
        href="https:fathomless-coast-62859-4d8464296632.herokuapp.com" 
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={textEditor} 
        className='img-noteTaker'
         alt= 'textEditor' /></a
        >
        <a className='github-logo' href="https://github.com/hsaagal78/PWA-TextEditor"><FontAwesomeIcon icon={faGithub} /></a>
       
         
       </div>
       <div className='link-noteTaker'>
        <h1>Tech Blog</h1>
         <h2> Blogging to share their thoughts through blog posts</h2>
        <a 
        className='link-noteTaker'
        href="https://fierce-fortress-39623-eda80897ed13.herokuapp.com" 
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={techBlog} 
        className='img-noteTaker'
         alt= 'noteTaker' /></a
        >
        <a className='github-logo' href="https://github.com/hsaagal78/BlogMVCCentral"><FontAwesomeIcon icon={faGithub} /></a>
       
         
       </div>
       <div className='link-noteTaker'>
        <h1>Rype</h1>
         <h2>Created appealing platform base ingredients have on hand</h2>
        <a 
        className='link-noteTaker'
        href="https://vast-waters-05451-3dbd8c32d7c8.herokuapp.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={rype} 
        className='img-noteTaker'
         alt= 'noteTaker' /></a
        >
        <a className='github-logo' href="https://github.com/jeremytboyer/rype-project"><FontAwesomeIcon icon={faGithub} /></a>
       
         
       </div>
       <div className='link-noteTaker'>
        <h1>Coding Quiz</h1>
         <h2>App that allwos to take a Quiz.</h2>
        <a 
        className='link-noteTaker'
        href="https://hsaagal78.github.io/ChallengeCodeQuiz/" 
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={codingQuiz} 
        className='img-noteTaker'
         alt= 'noteTaker' /></a
        >
        <a className='github-logo' href="https://github.com/hsaagal78/ChallengeCodeQuiz"><FontAwesomeIcon icon={faGithub} /></a>
       
         
       </div>
       <div className='link-noteTaker'>
        <h1>Wheater Dashboard</h1>
         <h2>The forecast for the next five days for a specific city</h2>
        <a 
        className='link-noteTaker'
        href="https://hsaagal78.github.io/Dashboard_Weather_challenge/" 
        target="_blank" 
        rel="noopener noreferrer"
        ><img src={wheatherP} 
        className='img-noteTaker'
         alt= 'noteTaker' /></a
        >
        <a className='github-logo' href="https://github.com/hsaagal78/Dashboard_Weather_challenge"><FontAwesomeIcon icon={faGithub} /></a>
       
         
       </div>
        
      </section>
      
    )
  }
  
  export default Portfolio;

