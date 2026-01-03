import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (

    <Link to={`/project-details/${project.id}`}>
    <div className="m-3 bg-[#fafafa] dark:bg-[#161B22] w-full rounded-xl shadow-md 
                    flex flex-col overflow-hidden  border-2 dark:border-[#2A2F36]  p-6
                    transition-transform transform hover:scale-105 hover:shadow-xl" >
     
      {/* Image */}
      <img
        src={project.coverImage}
        alt={project.title}
        className="w-full h-40 sm:h-50 md:h-58 object-cover rounded-md"
      />

      {/* Content */}
      <div className="px-3 py-1 flex flex-col flex-grow">
        <h2 className="text-lg md:text-xl font-bold text-[#161B22] dark:text-white mb-4 text-center">
          {project.title}
        </h2>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 text-justify">
          {project.description}
        </p>

        {/* Section footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            Contributors :
            {project.contributors?.length > 0
              ? project.contributors.map(c => c.fullname).join(", ")
              : " "}
          </span>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white-600 dark:text-black-400 hover:text-black-800 dark:hover:text-white-300"
          >
            <DiGithubBadge size={32} />
          </a>
        </div>
      </div>
      
    </div>
    
    </Link>);
};
