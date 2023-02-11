import classNames from "classnames";

const Button = ({ type = "primary", ...props }) => (
  <button
    {...props}
    className={classNames(
      "flex items-center justify-center px-3 py-1.5  transition-all duration-300 rounded text-sm",
      {
        "bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 dark:text-gray-800 text-white": type === "primary",
        "bg-transparent text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-blue-400": type === "link",
      },
      props.className
    )}
  />
);

export default Button;
