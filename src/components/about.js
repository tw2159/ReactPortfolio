import te from "../assets/te.jpg";

function About() {
  return(
    <>
      <section className="about hero">
        <div className="content">
          <h4>About</h4>
          <img src={te} alt="" className="photo" />
          <p>I am a senior financial analyst with a passion for coding.</p>
          <p>I am happy to share all the projects that I completed during my coding bootcamp course and my progress along this coding journey.</p>
        </div>
      </section>
    </>
  );
}

export default About;
