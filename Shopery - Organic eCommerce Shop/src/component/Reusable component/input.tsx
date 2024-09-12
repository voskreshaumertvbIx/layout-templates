import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  validationMessage?: string;
  validationState?: "success" | "warning" | "error";
  className?: string;
  name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  validationMessage,
  validationState,
  className = "",
  name,
}) => {
  const getValidationClasses = () => {
    switch (validationState) {
      case "success":
        return "border-green-500 text-green-500";
      case "warning":
        return "border-yellow-500 text-yellow-500";
      case "error":
        return "border-red-500 text-red-500";
      default:
        return "";
    }
  };

  const getValidationIcon = () => {
    switch (validationState) {
      case "success":
        return "/img/icon/success.png";
      case "warning":
        return "/img/icon/warning.png";
      case "error":
        return "/img/icon/error.png";
      default:
        return "";
    }
  };

  return (
    <div className="relative">
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className={`${className} ${getValidationClasses()} border-[1px] pl-3`}
        />
        {validationState && (
          <img
            src={getValidationIcon()}
            alt={validationState}
            className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
          />
        )}
      </div>
      {validationMessage && (
        <div className="relative mt-1 flex items-center">
          <p className={`text-sm ${getValidationClasses()} flex-grow`}>
            {validationMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default InputField;
