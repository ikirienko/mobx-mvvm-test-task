import { observer } from "mobx-react-lite";
import { CountryInfo } from "../../api/apiService";
import "./styles.css";

export interface IPromptProps<T extends { name: string }> {
  variant: "country";
  item: T;
  onClick?: () => void;
}

const Prompt = observer(
  <T extends { name: string }>({ variant, item, onClick }: IPromptProps<T>) => {
    if (variant === "country") {
      return (
        <div className="prompt" onClick={() => onClick && onClick()}>
          <span>{(item as unknown as CountryInfo).name}</span>
          <span>{(item as unknown as CountryInfo).fullName}</span>
          <img
            src={(item as unknown as CountryInfo).flag}
            alt={`Flag of ${(item as unknown as CountryInfo).name}`}
          />
        </div>
      );
    }

    return <div></div>;
  }
);

export default Prompt;
