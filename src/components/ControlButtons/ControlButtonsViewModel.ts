import { makeAutoObservable } from "mobx";
import { IControlledInput } from "../../types";

export class ControlButtonsViewModel implements IControlledInput {
  inputValue: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue = (value: string) => {
    this.inputValue = value;
  };
}
