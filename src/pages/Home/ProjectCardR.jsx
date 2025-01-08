import PropTypes from "prop-types";
import Markdown from "react-markdown";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCardR = ({ projectData }) => {
  return (
    <div className="grid lg:grid-cols-5 gap-3">
      <div className="lg:col-span-4 card bg-base-200 rounded-lg w-full p-12 flex-col-reverse lg:flex-row gap-6 items-center justify-end text-right">
        <div className="flex flex-col gap-3 items-end">
          <h3 className="font-bold text-3xl text-primary">
            {projectData.title}
          </h3>
          <a href={projectData.repo} className="btn btn-link p-0 text-blue-400">
            Github Repo
            <FaExternalLinkAlt />
          </a>
          <p>{projectData.summary}</p>
          <button
            className="btn btn-success btn-xs"
            onClick={() => document.getElementById(projectData.id).showModal()}
          >
            details...
          </button>
          <dialog id={projectData.id} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <img
                src={projectData.img}
                className="w-8/12 mx-auto my-12"
                alt=""
              />
              <div className="prose lg:prose-xl text-justify mx-auto">
                <Markdown>{projectData.desc}</Markdown>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <img src={projectData.icon} className="size-32" alt="work" />
      </div>
      <div className="w-full h-full bg-gradient-to-l from-base-100 to-secondary/30 rounded-l-lg hidden lg:block"></div>
    </div>
  );
};

ProjectCardR.propTypes = {
  projectData: PropTypes.object,
};

export default ProjectCardR;
