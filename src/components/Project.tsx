// import { useState } from "react";
import placeholderImage from "../assets/placeholder.png";
const Project = (props: {
  title: string;
  description: string;
  html_url: string;
}) => {
  // var user = "CD4ny";
  const onImageError = (e:any) => {
    e.target.src = placeholderImage
  }
  return (
    <a
      href={props.html_url}
      className="flex flex-col  justify-between border rounded-lg"
    >
      <div className="px-2 py-1">
        <h3 className="text-md font-light font-nunito text-blue_(munsell)-700">
          {props.title}
        </h3>
        <p className="text-xs font-extralight font-montserrat text-orange_(web)-800">
          {props.description == null ? "No description" : props.description}
        </p>
      </div>
      <img
        className="min-w-72 h-auto border rounded-md"

        src={
          "https://raw.githubusercontent.com/CD4ny/" +
          props.title +
          "/master/screenshot.webp"
        }
        alt="project-screenshot"

        onError={onImageError}
      />
    </a>
  );
};

export default Project;
