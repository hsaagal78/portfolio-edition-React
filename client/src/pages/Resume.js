import resume from '../asses/resume.pdf'

function Resume() {
    return (
      <main className="resume-container">
        <h1>Resume</h1>
        <a href={resume}>Download my Resume</a>

        <div className="skills-section">
        <h1>Front-end Proficiencies</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="skills-section">
        <h1>Back-end Proficiencies</h1>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      </main>
    )
  }
  
  export default Resume;