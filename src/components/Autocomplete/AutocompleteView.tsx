import { observer } from "mobx-react-lite";
import Input from "../Input/Input";
import Prompts from "../Prompts";
import { AutocompleteViewModel } from "./AutocompleteViewModel";
import "./styles.css";

interface IAutocompleteViewProps<T extends { name?: string }> {
  viewModel: AutocompleteViewModel<T>;
}

const AutocompleteView: <T extends { name?: string }>(
  props: IAutocompleteViewProps<T>
) => React.ReactElement | null = observer(({ viewModel }) => {
  console.log("AutocompleteView render");

  return (
    <div className="autocomplete">
      <Input className="input" viewModel={viewModel} />
      <div className="prompts-container">
        <Prompts viewModel={viewModel} variant="country" />
      </div>
    </div>
  );
});

export default AutocompleteView;
