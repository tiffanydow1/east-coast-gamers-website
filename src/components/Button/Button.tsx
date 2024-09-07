import { MouseEventHandler } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  type: 'button' | 'submit';
  variant: 'outlined' | 'solid';
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  text,
  onClick
}) => {
  return (
    <button
      type={type}
      className={variant === 'outlined' ? styles.outlined : styles.solid}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;
