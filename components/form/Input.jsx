import React from "react";

const Input = (props) => {
  const { type, errorMessage, touched, placeholder, ...formProps } = props;
  return (
    <div className="w-full">
      <label className="relative block cursor-text">
        <input
          type={type}
          className={`h-14 w-full border outline-none px-4 peer 
          ${type !== "datetime-local" && "pt-2"}
          ${touched && errorMessage ? "border-red-500" : "border-primary"}
          
          `}
          required
          {...formProps}
        />
        {type !== "datetime-local" && (
          <span
            className="absolute  top-0  left-0 px-4 
        text-sm flex items-center  h-full peer-focus:h-7   
        peer-focus:text-xs peer-valid:7
        peer-valid:text-xs transition-all"
          >
            {...placeholder}
          </span>
        )}
      </label>
      {touched && <span className="text-xs text-danger">{errorMessage}</span>}
    </div>
  );
};

export default Input;
