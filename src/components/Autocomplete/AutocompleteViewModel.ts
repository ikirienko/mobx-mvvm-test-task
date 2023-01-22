import { makeAutoObservable, reaction, runInAction } from "mobx";
import { IControlledInput } from "../../types";

export class AutocompleteViewModel<T extends { name?: string }>
  implements IControlledInput
{
  items: T[] = [];
  pauseAutocomplete = false;
  inputValue: string = "";
  maxPromptsAmount = 5;
  fetchItemsByValue: (value: string) => Promise<T[]>;

  constructor(
    fetchItemsByValue: (value: string) => Promise<T[]>,
    maxPromptsAmount: number
  ) {
    makeAutoObservable(this, {
      pauseAutocomplete: false,
    });
    this.fetchItemsByValue = fetchItemsByValue;
    this.maxPromptsAmount = maxPromptsAmount;
    reaction(
      () => this.inputValue,
      (data) => {
        console.log("reaction is invoked, data:", data, this.items);
        this.loadItems();
      }
    );
  }

  setInputValue = (value: string) => {
    console.log("DDDDDD inputValue:", value);
    this.inputValue = value;
  };

  clearItems = () => {
    this.items = [];
  };

  loadItems = () => {
    console.log("loadItems invoked");
    if (!this.pauseAutocomplete) {
      this.fetchItemsByValue(this.inputValue).then((res) => {
        runInAction(() => {
          this.items = res.slice(0, this.maxPromptsAmount);
        });
      });
    } else {
      this.pauseAutocomplete = false;
    }
  };
}
