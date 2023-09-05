import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
  onOpen: () => void;
}

const AlertExercise = ({ children, onClose, onOpen }: Props) => {
  return (
    <>
      <div className="alert alert-primary">
        {children}
        <button type="button" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
        <button type="button" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default AlertExercise;
