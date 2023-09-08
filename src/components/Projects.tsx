import { useEffect, useState } from "react";
import Project from "./Project";

function Projects() {
  var user = "cd4ny";

  const [projects1, setProjects] = useState([{id:'',name:'',description:'',html_url:''}]);

  const options = { method: "GET" };

    useEffect(() => {
      fetch("https://api.github.com/users/" + user  + "/repos", options)
      .then((response) => response.json())
      .then((response) => setProjects(response))
      .catch((err) => console.error(err));
    }, []);

  // setProjects([
  //   {"name":"cd4ny","description":"asd"}
  // ]);

  return (
    <section
      id="projects"
      className="flex flex-col p-8 justify-start items-center mt-4  min-h-screen"
    >
      <h1 className="text-xl text-blue_(munsell)-800 font-nunito mb-3">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">{
        projects1.map((item)=>{
          if(item.name!='')
          return <Project key={item.id} title={item.name} description={item.description} html_url={item.html_url} />
        })
      }</div>
    </section>
  );
}

export default Projects;
