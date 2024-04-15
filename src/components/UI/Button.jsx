const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-accent-regular hover:bg-accent-light text-grey-alwhite px-4 py-2 rounded shadow-md

    ${className}`}
  >
    {children}
  </button>
);

export default Button;
