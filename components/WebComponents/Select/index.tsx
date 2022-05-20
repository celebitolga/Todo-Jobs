// styles
import * as S from "./styles.styled";

type OptionType = {
  value: string | number;
  label: string;
}

interface Props {
  name?: string;
  id?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: boolean;
  options: Array<OptionType>;
  renderItem: (item: Array<OptionType>) => JSX.Element[];
}

function Select({
  name,
  id,
  value,
  onChange,
  onBlur,
  error,
  options,
  renderItem,
}: Props): JSX.Element {
  return (
    <S.Select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${error ? "-error" : ""}`}
    >
      { options && renderItem(options)}
    </S.Select>
  );
}

export default Select;
