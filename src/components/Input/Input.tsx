import styles from './Input.module.css';

type InputProps = {
  label: string;
  title: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  error: string | null;
};

const Input = ({
  label,
  title,
  placeholder,
  type,
  value,
  onChange,
  error,
  onBlur,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={title}>
        {label}:
      </label>
      <input
        className={styles.input}
        title={title}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
