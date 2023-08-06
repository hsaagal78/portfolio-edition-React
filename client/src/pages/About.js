import React from 'react';
import developer from '../asses/developer.png'


function About() {
    return (
      <main className='aboutPage'>
        <h1>About me </h1>
        <h3>Hello there! My mane is Hernan Sagal.</h3>
        <img src={developer} 
        className="img-developer"
        alt= "develoderImg" />
        <p>Hello there! I'm Hernan, a passionate web developer with a focus on creating exceptional digital experiences. My journey into the world of programming started with insatiable curiosity and quickly turned into both my passion and profession.
        With a strong foundation in modern web technologies like HTML, CSS, and JavaScript, I've worked on a variety of challenging projects ranging from personal websites to complex web applications. I love exploring new technologies and finding creative solutions for the problems I encounter
        My goal is to blend design and functionality to deliver impactful digital experiences. I'm passionate about continuous learning and I'm always on the lookout for opportunities to expand my skills and knowledge. When I'm not in front of the screen, I enjoy exploring the world, savoring good food, and spending time with friends and family.
        Thank you for visiting my portfolio! Whether you have an exciting project in mind or just want to say hello, I'd be thrilled to hear from you.
        </p>
      </main>
    )
  }
  
  export default About;