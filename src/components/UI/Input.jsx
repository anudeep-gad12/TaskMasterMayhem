const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="  mb-1  text-sm">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
