import { useState } from "react";

function Hero() {

  var user = "CD4ny";

  const [projects , setprojects] = useState(0) 

  return (
    <section id="projects" className="flex flex-col p-4 justify-center items-center min-h-screen">
      <h1 className="text-md text-blue_(munsell)-800 font-nunito">Projects</h1>
      <a href="#" className="flex flex-col border my-4 rounded-lg">
            <div className="px-2 py-1">
            <h3 className="text-md font-light font-nunito text-blue_(munsell)-700">Nomproj</h3>
            <p className="text-xs font-extralight font-montserrat text-orange_(web)-800">"Global Game Jam register module"</p>
            </div>
            <img className="w-72" src="https://raw.githubusercontent.com/CD4ny/GGJ_REG/master/Screenshot.webp" alt="project-screenshot" />
      </a>
    </section>
  );
}

export default Hero;