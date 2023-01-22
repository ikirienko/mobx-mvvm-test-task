import { IControlButtonsProps } from ".";
import { IControlledInput } from "../../types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

interface IControlButtonProps extends IControlButtonsProps {
  viewModel: IControlledInput;
}

const ControlButtonsView = ({
  viewModel,
  leftButtonsProps,
  rightButtonsProps,
}: IControlButtonProps) => {
  return (
    <div className="control-buttons">
      {!!leftButtonsProps?.length && (
        <div className="buttons">
          {leftButtonsProps.map((buttonProps) => (
            <Button {...buttonProps} inputViewModel={viewModel} />
          ))}
        </div>
      )}
      <Input viewModel={viewModel} />
      {!!rightButtonsProps?.length && (
        <div className="buttons">
          {rightButtonsProps.map((buttonProps) => (
            <Button {...buttonProps} inputViewModel={viewModel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ControlButtonsView;
