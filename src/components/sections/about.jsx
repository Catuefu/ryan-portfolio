import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontedSkills = ["HTML", "JavaScript", "React Native", "TailWindCSS"];
  const backedSkills = ["PHP", "Python", "MySQL", "Laravel"];
  const gameSkill = ["C++", "C#", "Lua", "Unity 2D", "Roblox Studio", "Godot"];
  const designSkill = ["Figma", "Blender"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-center text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-600 mb-6">
              I’m currently studying Software Engineering at SMK Strada Jakarta.
              I’m passionate about web and app development, game creation, and
              3D modeling. I enjoy learning new tools and improving my skills
              through hands-on projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Fronted</h3>
                <div className="flex flex-wrap gap-2">
                  {frontedSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backedSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Game Development & Scripting
                </h3>
                <div className="flex flex-wrap gap-2">
                  {gameSkill.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Design & Prototyping
                </h3>
                <div className="flex flex-wrap gap-2">
                  {designSkill.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong> Software Engineering </strong> - SMK STRADA JAKARTA
                  (2023 - Present)
                </li>
                <li>
                  <strong> Machine Learning </strong> - Coding Camp powered by
                  DBS Foundation (2025)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">✨ Hobby</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Experimenting with ESP32 microcontroller projects</li>
                    <li>3D modeling and digital sculpting</li>
                    <li>
                      Experimenting and Developing games using various engines
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
