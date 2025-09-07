import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "Netflix clone built with HTML & CSS, demonstrating a responsive and visually accurate UI of the streaming platform.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://clonesitebyme.netlify.app/",
    githubUrl: "https://github.com/Sumit8617/Netflix-Clone",
  },
  {
    id: 2,
    title: "Wheather App",
    description:
      "A web application that forecasts weather conditions based on user input, providing real-time updates and a user-friendly interface.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://weatherforecastbysumit.netlify.app/",
    githubUrl: "https://github.com/Sumit8617/weather-forecast",
  },
  {
    id: 3,
    title: "Net Mirror",
    description:
      "Movie search web app with a responsive UI, powered by HTML, CSS, JS, and OMDb API for real-time movie data.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://netmirror-black.vercel.app/",
    githubUrl: "https://github.com/Sumit8617/Netmirror",
  },
  {
    id: 4,
    title: "ChatApp",
    description:
      "MERN stack chat app with Socket.IO, supporting user authentication and real-time messaging.",
    image: "/projects/project4.png",
    tags: [
      "HTML",
      "Tailwind.CSS",
      "JavaScript",
      "MERN"
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col mt-auto">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sumit8617"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
