import React from 'react';
import developer from '../asses/developer.png'

function Home() {

return (
    <main>
        <img src={developer} 
        className="img-fluid rounded-circle"
        alt= "Develope" />
        <h1>Hernan Sagal</h1>
        <h2>Web Developer</h2>
      
    </main>
  )
}

    export default Home;