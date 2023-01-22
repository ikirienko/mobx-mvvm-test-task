import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { AutocompleteViewModel } from "./Autocomplete/AutocompleteViewModel";
import Prompt, { IPromptProps } from "./Prompt/Prompt";

interface IPromptsInterface<T extends { name: string }>
  extends Pick<IPromptProps<T>, "variant"> {
  viewModel: AutocompleteViewModel<T>;
}

const Prompts = observer(
  <T extends { name: string }>({
    viewModel,
    variant,
  }: IPromptsInterface<T>) => {
    const { items, setInputValue, clearItems } = viewModel;
    console.log("items:", toJS(items));

    return (
      <div>
        {items.map((item) => (
          <Prompt
            key={item.name}
            item={item}
            variant={variant}
            onClick={() => {
              viewModel.pauseAutocomplete = true;
              clearItems();
              setInputValue(item.name);
            }}
          />
        ))}
      </div>
    );

    // return <div>dfdfghtrghdhg</div>
  }
);

export default Prompts;
