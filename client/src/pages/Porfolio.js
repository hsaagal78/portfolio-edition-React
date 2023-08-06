import React from 'react';
import noteTaker from '../asses/noteTaker.png'
import rype from '../asses/rype.png'
import techBlog from '../asses/techBlog.png'
import textEditor from '../asses/textEditor.png'
function Portfolio() {
    return (
     
      <ul className='porfolio-contaner'>
        <h1>Portfolio</h1>
        <li>
        <a href='https:fathomless-coast-62859-4d8464296632.herokuapp.com'></a>
        <img src={noteTaker} 
        className='img-noteTaker'
         alt= 'noteTaker' />
         <h1>Note Taker</h1>
         <h2>App that allos user to create,update and delete notes</h2>
        </li>

        
        
        </ul>
    )
  }
  
  export default Portfolio;

  // https:fathomless-coast-62859-4d8464296632.herokuapp.com/(text editor)
 
        // https://fierce-fortress-39623-eda80897ed13.herokuapp.com/(Tech Blog)
        // https://lit-caverns-20017-2064580b596c.herokuapp.com/(Note Taker)