import { memo } from "react";

// styles
import * as S from "./styles.styled";

interface Props {
  type?: "text" | "number" | "email" | "password";
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  error?: boolean;
  icon?: React.ReactElement;
  disabled?: boolean;
}

function Input({
  type = "text",
  name,
  id,
  value,
  placeholder,
  onChange,
  onBlur,
  maxLength,
  error,
  icon,
  disabled,
}: Props): JSX.Element {
  return (
    <S.Wrapper>
      <S.Input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        className={`${error ? "-error" : ""} ${icon ? "-with-icon" : ""}`}
        disabled={disabled}
      ></S.Input>
      {icon && <S.Icon>{icon}</S.Icon>}
    </S.Wrapper>
  );
}

export default memo(Input);
