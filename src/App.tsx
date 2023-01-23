import { CountryInfo, getCountryByName } from "./api/apiService";
import Autocomplete from "./components/Autocomplete";
import ControlButtons from "./components/ControlButtons";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h3>1. Контролы с кнопками</h3>
      <ControlButtons
        rightButtonsProps={[
          {
            text: "Clear",
            onClickCallback: (inputViewModel) => {
              inputViewModel?.setInputValue("");
            },
          },
          {
            text: "Hello world",
            onClickCallback: (inputViewModel) => {
              inputViewModel?.setInputValue("Hello world!");
            },
          },
        ]}
      />
      <ControlButtons
        leftButtonsProps={[
          {
            text: "Display text",
            onClickCallback: (inputViewModel) => {
              alert(inputViewModel?.inputValue);
            },
          },
        ]}
        rightButtonsProps={[
          {
            text: "Display number",
            onClickCallback: (inputViewModel) => {
              const value = +(inputViewModel?.inputValue || NaN);

              if (!isNaN(value)) {
                alert(value);
              } else {
                alert("Oops, it's not a number!");
              }
            },
          },
        ]}
      />
      <h3>2. Автокомплиты</h3>
      <Autocomplete<CountryInfo>
        maxPromptsAmount={3}
        fetchItemsByValue={getCountryByName}
      />
      <Autocomplete<CountryInfo>
        maxPromptsAmount={10}
        fetchItemsByValue={getCountryByName}
      />
    </div>
  );
}

export default App;
