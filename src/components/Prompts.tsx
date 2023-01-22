import { observer } from "mobx-react-lite";
import { AutocompleteViewModel } from "./Autocomplete/AutocompleteViewModel";
import Prompt, { IPromptProps } from "./Prompt/Prompt";

interface IPromptsInterface<T extends { name?: string }>
  extends Pick<IPromptProps<T>, "variant"> {
  viewModel: AutocompleteViewModel<T>;
}

const Prompts = observer(
  <T extends { name?: string }>({
    viewModel,
    variant,
  }: IPromptsInterface<T>) => {
    const { items, setInputValue, clearItems } = viewModel;

    return (
      <div>
        {items.map((item) => (
          <Prompt
            key={item?.name ?? JSON.stringify(item).slice(0, 10)}
            item={item}
            variant={variant}
            onClick={() => {
              viewModel.pauseAutocomplete = true;
              clearItems();
              setInputValue(item?.name ?? '');
            }}
          />
        ))}
      </div>
    );
  }
);

export default Prompts;
