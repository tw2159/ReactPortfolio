import resume from "../assets/resume.pdf";

function Resume() {
  return(
    <>
      <section className="resume hero">
        <div className="content">
          <h4>Resume</h4>
          <div className="frontend">
            <h5>Front-End Skills</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
            </ul>
          </div>
          <div className="backend">
            <h5>Back-End Skills</h5>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>APIs</li>
              <li>REST</li>
            </ul>
          </div>
          <a href={resume} className="btn">Download Resume</a>
        </div>
      </section>
    </>
  );
}

export default Resume;
