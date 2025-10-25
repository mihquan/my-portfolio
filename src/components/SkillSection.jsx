function SkillSection() {
    return(
        <section
        id="skills"
        className="w-full h-screen max-w-5xl py-20 px-6 text-center border-t border-gray-800"
      >
        <h2 className="text-3xl font-semibold mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Docker",
            "Linux",
            "Git",
            "Vite",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gray-800/50 p-4 rounded-xl hover:scale-105 transition transform"
            >
              <p className="text-lg font-medium">{tech}</p>
            </div>
          ))}
        </div>
      </section>
    );
}

export default SkillSection;