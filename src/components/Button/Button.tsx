import styles from './Button.module.css';

type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
