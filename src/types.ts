export interface IControlledInput {
  inputValue: string;
  setInputValue: (value: string, pauseAutocomplete?: boolean) => void;
}
