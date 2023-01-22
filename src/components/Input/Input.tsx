import { observer } from "mobx-react-lite";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IControlledInput } from "../../types";
import "./styles.css";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  viewModel: IControlledInput;
}

const Input = observer(({ viewModel }: IInputProps) => {
  const { inputValue, setInputValue } = viewModel;
  console.log("inputValue:", inputValue, setInputValue);

  return (
    <input
      value={inputValue}
      onChange={(e) => {
        setInputValue((e.target as HTMLInputElement).value);
      }}
    />
  );
});

export default Input;
