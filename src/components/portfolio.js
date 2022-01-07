import movieTalk from "../assets/movie-talk.jpg";
import techBlog from "../assets/tech-blog.jpg";
import noteTaker from "../assets/note-taker.jpg";
import teamProfileGenerator from "../assets/team-profile-generator.jpg";
import movieDashboard from "../assets/movie-dashboard.jpg";
import weatherDashboard from "../assets/weather-dashboard.jpg";
import workDayScheduler from "../assets/work-day-scheduler.jpg";
import codeQuiz from "../assets/code-quiz.jpg";
import passwordGenerator from "../assets/password-generator.jpg";
import horiseon from "../assets/horiseon.jpg";import movieTalk from "../assets/movie-talk.jpg";
import techBlog from "../assets/tech-blog.jpg";
import noteTaker from "../assets/note-taker.jpg";
import teamProfileGenerator from "../assets/team-profile-generator.jpg";
import movieDashboard from "../assets/movie-dashboard.jpg";
import weatherDashboard from "../assets/weather-dashboard.jpg";
import workDayScheduler from "../assets/work-day-scheduler.jpg";
import codeQuiz from "../assets/code-quiz.jpg";
import passwordGenerator from "../assets/password-generator.jpg";
import horiseon from "../assets/horiseon.jpg";
import runBuddy from "../assets/run-buddy.jpg";

function Portfolio() {
  return(
    <section className="portfolio hero">
      <div className="content">
        <h4>Portfolio</h4>
        <ul>
          <li>
            <a href="https://github.com/tw2159/movie-talk" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://whispering-mountain-31913.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={movieTalk} alt="" className="screenshot" />
              <div className="project-info">
                <span>Movie Talk</span>
                <span className="project-details">Interactive Front- and Back-End Project</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Tech-Blog" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://pure-lake-61741.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={techBlog} alt="" className="screenshot" />
              <div className="project-info">
                <span>Tech Blog</span>
                <span className="project-details">Express.js / MySQL / HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Note-Taker" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://limitless-dusk-41992.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={noteTaker} alt="" className="screenshot" />
              <div className="project-info">
                <span>Note Taker</span>
                <span className="project-details">Express.js / HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Team-Profile-Generator" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/Team-Profile-Generator/" target="_blank" rel="noreferrer">
              <img src={teamProfileGenerator} alt="" className="screenshot" />
              <div className="project-info">
                <span>Team Profile Generator</span>
                <span className="project-details">Node.js / HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Project-1" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://asharkwithlazerbeams.github.io/Project-1/" target="_blank" rel="noreferrer">
              <img src={movieDashboard} alt="" className="screenshot" />
              <div className="project-info">
                <span>Movie Dashboard</span>
                <span className="project-details">Interactive Front-End Project</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/weather-dashboard" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
              <img src={weatherDashboard} alt="" className="screenshot" />
              <div className="project-info">
                <span>Weather Dashboard</span>
                <span className="project-details">Third-Party APIs</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/work-day-scheduler" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
              <img src={workDayScheduler} alt="" className="screenshot" />
              <div className="project-info">
                <span>Work Day Scheduler</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/code-quiz" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/code-quiz/" target="_blank" rel="noreferrer">
              <img src={codeQuiz} alt="" className="screenshot" />
              <div className="project-info">
                <span>Code Quiz</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/password-generator" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/password-generator/" target="_blank" rel="noreferrer">
              <img src={passwordGenerator} alt="" className="screenshot" />
              <div className="project-info">
                <span>Password Generator</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/horisen-social-solution-services" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/horisen-social-solution-services/" target="_blank" rel="noreferrer">
              <img src={horiseon} alt="" className="screenshot" />
              <div className="project-info">
                <span>Horiseon</span>
                <span className="project-details">HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/run-buddy" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/run-buddy/" target="_blank" rel="noreferrer">
              <img src={runBuddy} alt="" className="screenshot" />
              <div className="project-info">
                <span>Run Buddy</span>
                <span className="project-details">HTML / CSS</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;

import runBuddy from "../assets/run-buddy.jpg";

function Portfolio() {
  return(
    <section className="portfolio hero">
      <div className="content">
        <h4>Portfolio</h4>
        <ul>
          <li>
            <a href="https://github.com/tw2159/movie-talk" target="_blank" rel="noreferrer">
              <img src={movieTalk} alt="" className="screenshot" />
              <div className="project-info">
                <span>Movie Talk</span>
                <span className="project-details">Interactive Front- and Back-End Project</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Tech-Blog" target="_blank" rel="noreferrer">
              <img src={techBlog} alt="" className="screenshot" />
              <div className="project-info">
                <span>Tech Blog</span>
                <span className="project-details">Express.js / MySQL / HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Note-Taker" target="_blank" rel="noreferrer">
              <img src={noteTaker} alt="" className="screenshot" />
              <div className="project-info">
                <span>Note Taker</span>
                <span className="project-details">Express.js / HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Team-Profile-Generator" target="_blank" rel="noreferrer">
              <img src={teamProfileGenerator} alt="" className="screenshot" />
              <div className="project-info">
                <span>Team Profile Generator</span>
                <span className="project-details">Node.js / HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/Project-1" target="_blank" rel="noreferrer">
              <img src={movieDashboard} alt="" className="screenshot" />
              <div className="project-info">
                <span>Movie Dashboard</span>
                <span className="project-details">Interactive Front-End Project</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/weather-dashboard" target="_blank" rel="noreferrer">
              <img src={weatherDashboard} alt="" className="screenshot" />
              <div className="project-info">
                <span>Weather Dashboard</span>
                <span className="project-details">Third-Party APIs</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/work-day-scheduler" target="_blank" rel="noreferrer">
              <img src={workDayScheduler} alt="" className="screenshot" />
              <div className="project-info">
                <span>Work Day Scheduler</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/code-quiz" target="_blank" rel="noreferrer">
              <img src={codeQuiz} alt="" className="screenshot" />
              <div className="project-info">
                <span>Code Quiz</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/password-generator" target="_blank" rel="noreferrer">
              <img src={passwordGenerator} alt="" className="screenshot" />
              <div className="project-info">
                <span>Password Generator</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/horisen-social-solution-services" target="_blank" rel="noreferrer">
              <img src={horiseon} alt="" className="screenshot" />
              <div className="project-info">
                <span>Horiseon</span>
                <span className="project-details">HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tw2159/run-buddy" target="_blank" rel="noreferrer">
              <img src={runBuddy} alt="" className="screenshot" />
              <div className="project-info">
                <span>Run Buddy</span>
                <span className="project-details">HTML / CSS</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
