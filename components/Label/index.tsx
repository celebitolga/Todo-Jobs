// styles
import * as S from "./styles.styled";

interface Props {
  htmlFor?: string;
  children?: React.ReactNode;
}

function Label({
  htmlFor,
  children
}: Props): JSX.Element {
  return (
    <S.Label
      htmlFor={htmlFor}
    >
      {children}
    </S.Label>
  );
}

export default Label;
