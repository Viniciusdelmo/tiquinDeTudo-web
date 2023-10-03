import "./styles.scss";


interface ButtonProps {
  label: string;
  onClick: () => void;
}

function DefaultButton({ label, onClick }: ButtonProps) {
  return (
    <button className="button-container" onClick={onClick}>
      {label}
    </button>
  );
}

export default DefaultButton;