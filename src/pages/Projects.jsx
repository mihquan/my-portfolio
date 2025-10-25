import genshinForum from "../assets/genshin-talk.png"; // sample image

function Projects() {
  const projects = [
    {
      title: "Genshin Community Forum",
      image: genshinForum,
      description:
        "A web forum where Genshin Impact players can share tips, guides, and discussions in real time.",
      tech: ["Node.js", "Express", "EJS", "Bootstrap", "MongoDB"],
      links: {
        demo: "#",
        github: "https://github.com/yourname/genshin-forum",
      },
    },
    {
      title: "Personal Portfolio Website",
      image: "https://via.placeholder.com/400x200",
      description:
        "My personal portfolio to showcase my projects, experience, and contact information.",
      tech: ["React", "Tailwind CSS", "Vite"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Weather Forecast App",
      image: "https://via.placeholder.com/400x200",
      description:
        "A weather web app using the OpenWeather API to display current conditions and 5-day forecasts.",
      tech: ["React", "API Integration", "OpenWeather"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <main className="flex flex-col items-center w-full text-gray-100 bg-gray-950 min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition transform flex flex-col"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-400 text-sm mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.links.demo}
                  className="bg-indigo-500 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-600 transition"
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  href={p.links.github}
                  className="border border-indigo-400 text-indigo-300 px-3 py-1 rounded-md text-sm hover:bg-indigo-500/10 transition"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;