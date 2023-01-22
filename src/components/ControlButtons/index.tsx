import { useInstance } from "../../hooks/useInstance";
import { IButtonProps } from "../Button/Button";
import ControlButtonsView from "./ControlButtonsView";
import { ControlButtonsViewModel } from "./ControlButtonsViewModel";

export interface IControlButtonsProps {
  leftButtonsProps?: Pick<IButtonProps, "text" | "onClickCallback">[];
  rightButtonsProps?: Pick<IButtonProps, "text" | "onClickCallback">[];
}

const ControlButtons = (props: IControlButtonsProps) => {
  const viewModel = useInstance(new ControlButtonsViewModel());
  return <ControlButtonsView viewModel={viewModel} {...props} />;
};

export default ControlButtons;
