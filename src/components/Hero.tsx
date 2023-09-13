import profile from "../assets/profile.png";
import { faLinkedin , faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  const description =
    "Estudiante de ingeniería de software, programador especializado en Backend, con experiencia en tecnologías frontend, interesado en diseño del sistema y gráfico; entusiasta de la IA, la algoritmia y las matemáticas. ";
  const front_tech = " React, TailwindCss, JQuery, CSS, Bootstrap.";
  const back_tech = " Django, Flask, NextJs, SpringBoot, NestJs, WebFlux.";
  const db_tech = " MySql, PostgreSql, MongoDB, SqLite.";

  return (
    <section
      id="about"
      className="flex flex-col-reverse items-center justify-center min-h-screen p-4 md:flex-row sm:pt-0"
    >
      <div className="max-w-sm ">
        <h1 className="text-lg text-orange_(web) font-nunito">
          Daniel Chaviano Perez
        </h1>
        <a href="https://www.linkedin.com/in/chavianodaniel99">
          <FontAwesomeIcon className="text-white-400" icon={faLinkedin} size="xl" />
        </a>
        <a href="https://github.com/CD4ny">
          <FontAwesomeIcon className="px-3 text-white-400" size="xl" icon={faGithubSquare} />
        </a>
        <a href="mailto://chavianodaniel99@gmail.com">
          <FontAwesomeIcon className="text-white-400" size="xl" icon={faEnvelopeSquare} />
        </a>
        <h6 className="text-md text-blue_(munsell)-800 font-nunito">
          Software engineer
        </h6>

        <p className="text-xs font-thin font-montserrat">{description}</p>
        <br />
        <h1 className="text-md text-blue_(munsell)-800 font-nunito">
          Tecnologias Web
        </h1>
        <p className="inline text-xs font-light font-nunito text-blue_(munsell)-700">
          Backend:
        </p>
        <p className="inline text-xs font-extralight font-montserrat text-orange_(web)-800">
          {back_tech}
        </p>
        <br />
        <p className="inline text-xs font-light font-nunito text-blue_(munsell)-700">
          Frontend:
        </p>
        <p className="inline text-xs font-extralight font-montserrat text-orange_(web)-800">
          {front_tech}
        </p>
        <p></p>
        <p className="inline text-xs font-light font-nunito text-blue_(munsell)-700">
          Database:{" "}
        </p>
        <p className="inline text-xs font-extralight font-montserrat text-orange_(web)-800">
          {db_tech}
        </p>
      </div>
      <img
        src={profile}
        className="w-64 m-8 mt-12 transition-all duration-1000 rounded-full bg-white-100 hover:sepia-0 hover:transition-all hover:duration-1000 sepia md:w-64 animate-fade-left animate-once animate-duration-300 animate-delay-200 animate-ease-linear animate-normal animate-fill-both"
        alt="Logo"
      />
    </section>
  );
}

export default Hero;
