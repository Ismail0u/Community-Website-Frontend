import clsx from "clsx";

const Card = ({ children, className }) => {
  const baseStyles =
    " shadow-gray-400 dark:shadow-gray-200 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg dark:hover:shadow-md overflow-hidden ";

  return <div className={clsx(baseStyles, className)}>{children}</div>;
};

export default Card;
