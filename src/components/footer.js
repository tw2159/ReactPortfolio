function Footer() {
  const icons = [
    {
      link: "mailto:tw2159@nyu.edu",
      class: "fas fa-envelope"
    },
    {
      link: "https://github.com/tw2159",
      class: "fab fa-github"
    },
    {
      link: "https://www.linkedin.com/in/te-w-9b18b157/",
      class: "fab fa-linkedin"
    }
  ];

  return(
    <footer>
      <ul>
        {icons.map((icon, index) => 
          <li key={index}>
            <a href={icon.link} key={index}>
              <i className={icon.class}></i>
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
}

export default Footer;
