function About() {
  const name = "Rishabh Rajoura";
  const profession = "Full Stack Developer";
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I am {name}. I am passionate {profession} and I love building full stack
        applications.
      </p>
    </section>
  );
}

export default About;
