import { makeAutoObservable, reaction, runInAction } from "mobx";
import { IControlledInput } from "../../types";
import { getUniqueObjsByName } from "../../utils";

export class AutocompleteViewModel<T extends { name: string }>
  implements IControlledInput
{
  rawItems: T[] = [];
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
      (data) => this.loadItems(),
      { delay: 200 }
    );
  }

  setInputValue = (value: string) => {
    this.inputValue = value;
  };

  get items() {
    return getUniqueObjsByName(this.rawItems).slice(0, this.maxPromptsAmount);
  }

  clearItems = () => {
    this.rawItems = [];
  };

  loadItems = () => {
    if (!this.pauseAutocomplete) {
      this.fetchItemsByValue(this.inputValue).then((res) => {
        runInAction(() => {
          this.rawItems = res;
        });
      });
    } else {
      this.pauseAutocomplete = false;
    }
  };
}
