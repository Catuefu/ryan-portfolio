import { RevealOnScroll } from "../RevealOnScroll";

import myImage from "../../assets/Tram.webp";
import dashboard_Img from "../../assets/dashboard.webp";
import game_unity_Img from "../../assets/unity.webp";
import game_roblox_Img from "../../assets/roblox.webp";
import crud from "../../assets/crud.webp";
import figma from "../../assets/Figma.webp";
import blender from "../../assets/Blender.webp";
import godot from "../../assets/Godot.webp";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-center text-transparent">
            {" "}
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Unity Game */}
            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full">
              <img
                src={game_unity_Img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">2D Platformer Game</h3>
              <p className="text-gray-600 mb-4">
                Basic 2D platformer game project made to learn core game
                development concepts using Unity and free assets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Unity"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div> */}
            </div>

            {/* Roblox Game */}
            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full">
              <img
                src={game_roblox_Img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Game Top-Down Shooter</h3>
              <p className="text-gray-600 mb-4">
                Basic top-down shooter prototype made in Roblox Studio. Includes
                simple shooting, movement and, custom camera control using Lua
                scripting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Roblox Studio"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://youtu.be/yDxni_rTFWc"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Godot */}
            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full">
              <img
                src={godot}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">2D Character Test</h3>
              <p className="text-gray-600 mb-4">
                A simple test project in Godot where I created and rigged 2D
                characters, including a player and an enemy. The enemy moves
                toward the player, showcasing basic mechanics and animation
                setup.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Godot"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://youtu.be/1X2MHgsNm8c"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Blender */}
            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full">
              <img
                src={blender}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Stylized 3D Renders</h3>
              <p className="text-gray-600 mb-4">
                A showcase of my three favorite 3D renders, exploring various
                styles and techniques in Blender—including toon shading, vibrant
                lighting, and hand-drawn textures. Each piece highlights
                creative visual storytelling and experimental design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Blender"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex justify-between items-center">
                <a
                  href="https://www.figma.com/design/jRKGyXYkWL0SivN44PHGof/iDrive?t=iDMbXwPuBAJgGyiq-1"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div> */}
            </div>

            {/* Figma */}
            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full">
              <img
                src={figma}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mobile App UI Design</h3>
              <p className="text-gray-600 mb-4">
                Vibrant and decorative mobile app interface using Figma,
                featuring playful colors and modern layout.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Figma"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://www.figma.com/design/jRKGyXYkWL0SivN44PHGof/iDrive?t=iDMbXwPuBAJgGyiq-1"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Crud */}
            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full">
              <img
                src={crud}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                CRUD Website with Laravel
              </h3>
              <p className="text-gray-600 mb-4">
                Laravel-based web app with basic CRUD functions to explore the
                MVC architecture in web development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Laravel", "MySql"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://www.youtube.com/watch?v=NN5Y3OEv7BM"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
