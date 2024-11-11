import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({
  label,
  title,
  placeholder,
  type,
  value,
  onChange,
  error,
  onBlur,
  name,
}: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={title}>
        {label}:
      </label>
      <div className={styles.inputContainer}>
        <input
          name={name}
          className={styles.input}
          title={title}
          placeholder={placeholder}
          type={inputType}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
        {type === 'password' && (
          <button
            type="button"
            className={styles.toggleButton}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'}
          </button>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
