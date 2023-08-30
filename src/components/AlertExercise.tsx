import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const AlertExercise = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary">
        {children}
        <button type="button" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default AlertExercise;
