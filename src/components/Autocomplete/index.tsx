import { useInstance } from "../../hooks/useInstance";
import AutocompleteView from "./AutocompleteView";
import { AutocompleteViewModel } from "./AutocompleteViewModel";

interface IAutocompleteProps<T> {
  maxPromptsAmount: number;
  fetchItemsByValue: (value: string) => Promise<T[]>;
}

const Autocomplete = <T extends { name?: string }>({
  maxPromptsAmount,
  fetchItemsByValue,
}: IAutocompleteProps<T>) => {
  const viewModel = useInstance(
    new AutocompleteViewModel<T>(fetchItemsByValue, maxPromptsAmount)
  );
  console.log("viewModel:", viewModel);
  return <AutocompleteView viewModel={viewModel} />;
};

export default Autocomplete;
