// styles
import * as S from "./styles.styled";

interface Props {
  variant?: "urgent" | "regular" | "trivial" | string;
  children?: React.ReactNode;
}

function Badge({
  variant,
  children,
}: Props): JSX.Element {
  return (
    <S.Badge
      className={`${variant ? `-${variant}` : ""}`}
    >
      {children}
    </S.Badge>
  );
}

export default Badge;
