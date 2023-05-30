
import styles from './Button.module.scss';

interface ButtonProps {
  childern: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({childern, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {childern}
  </button>
);
