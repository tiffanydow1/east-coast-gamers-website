import styles from './button.module.css';

interface ButtonProps {
  variant: 'outlined' | 'solid';
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  text,
  onClick
}) => {
  return (
    <button className={variant === 'outlined' ? styles.outlined : styles.solid} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
