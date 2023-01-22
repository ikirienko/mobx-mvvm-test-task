import { IControlledInput } from "../../types";
import "./styles.css";

export interface IButtonProps {
  text: string;
  inputViewModel?: IControlledInput;
  onClickCallback: (controlledInputViewModel?: IControlledInput) => void;
}

const Button = ({ text, inputViewModel, onClickCallback }: IButtonProps) => {
  return (
    <button onClick={() => onClickCallback(inputViewModel)}>{text}</button>
  );
};

export default Button;
