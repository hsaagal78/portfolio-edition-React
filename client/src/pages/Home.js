import React from 'react';
import openPage from '../asses/openPage.jpg'

function Home() {

return (
    <main className='homePage-main'>
        <img src={openPage} 
        className="img-openPage"
        alt= "OpenPage" />
        <h1>Hernan Sagal</h1>
        <h2>Web Developer</h2>
      
    </main>
  )
}

    export default Home;