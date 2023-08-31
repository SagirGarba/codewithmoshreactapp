import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "Primary" | "Secondary" | "danger";
}

const Button = ({ children, color }: Props) => {
  return (
    <>
      <button className={[styles.btn, styles["btn-" + color]].join(" ")}>
        {children}
      </button>
    </>
  );
};

export default Button;
