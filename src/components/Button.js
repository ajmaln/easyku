import classNames from "classnames";

const Button = (props) => (
  <button
    {...props}
    className={classNames(
      "flex items-center justify-center px-3 py-1.5 bg-teal-500 hover:bg-teal-600 transition-all duration-300 rounded text-white text-sm",
      props.className
    )}
  />
);

export default Button;
