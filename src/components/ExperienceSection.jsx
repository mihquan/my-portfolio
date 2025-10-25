function ExperienceSection() {
    return(
        <section
        id="timeline"
        className="w-full h-screen max-w-4xl py-20 px-6 border-t border-gray-800"
        >
            <h2 className="text-3xl font-semibold mb-10 text-center">
            My Journey
            </h2>
            <ol className="relative border-l border-gray-700">
                <li className="mb-10 ml-6">
                    <span className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-1.5 border border-gray-900"></span>
                    <h3 className="text-xl font-semibold text-white">
                    2023 – Present
                    </h3>
                    <p className="text-gray-400">
                    Studying Information Technology at RMIT University Vietnam
                    </p>
                </li>

                <li className="mb-10 ml-6">
                    <span className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-1.5 border border-gray-900"></span>
                    <h3 className="text-xl font-semibold text-white">2024</h3>
                    <p className="text-gray-400">
                    Built my first community website using Node.js, Express, and
                    Bootstrap
                    </p>
                </li>

                <li className="ml-6">
                    <span className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-1.5 border border-gray-900"></span>
                    <h3 className="text-xl font-semibold text-white">2025</h3>
                    <p className="text-gray-400">
                    Learning React, TypeScript, and DevOps through personal projects
                    </p>
                </li>
            </ol>
      </section>
    );
}

export default ExperienceSection;