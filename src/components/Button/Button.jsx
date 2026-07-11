import styles from "./Button.module.css";

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
}) {
  const className = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
