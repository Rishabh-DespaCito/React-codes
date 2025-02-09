function ProjectList() {
  const projects = [
    {
      title: "Project One",
      description:
        "React Web application, specifically designed for the users to view the latest news.",
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "Ecommerce app with backend in springboot and frontend in React.",
      link: "#",
    },
  ];
  return (
    <section id="projects" className="projects-section">
      <h2> Projects </h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
