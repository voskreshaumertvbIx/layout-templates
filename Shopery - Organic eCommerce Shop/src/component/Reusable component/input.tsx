import React from 'react';

interface InputFieldProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  validationMessage?: string;
  validationState?: 'success' | 'warning' | 'error';
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  validationMessage,
  validationState,
  className = '',  
}) => {
  const getValidationClasses = () => {
    switch (validationState) {
      case 'success':
        return 'border-green-500 text-green-500';
      case 'warning':
        return 'border-yellow-500 text-yellow-500';
      case 'error':
        return 'border-red-500 text-red-500';
      default:
        return '';
    }
  };

  const getValidationIcon = () => {
    switch (validationState) {
      case 'success':
        return '/img/icon/success.png';
      case 'warning':
        return '/img/icon/warning.png';
      case 'error':
        return '/img/icon/error.png';
      default:
        return '';
    }
  };

  return (
    <div className="relative">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${className} ${getValidationClasses()} border-[1px]`}
        />
        {validationState && (
          <img
            src={getValidationIcon()}
            alt={validationState}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        )}
      </div>
      {validationMessage && (
        <p className={`mt-1 text-sm ${getValidationClasses()}`}>
          {validationMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
