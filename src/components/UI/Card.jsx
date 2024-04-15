/* eslint-disable react/prop-types */

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 m-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
