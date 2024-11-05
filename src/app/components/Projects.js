const projects = [
  { title: "Project 1", description: "Description of project1", link: "#" },
  { title: "Project 2", description: "Description of project2", link: "#" },
  { title: "Project 3", description: "Description of project3", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 hover:text-blue-500 mt-4 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
