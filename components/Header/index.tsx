// styles
import * as S from "./styles.styled";

// icons
import { BsCalendar2Check } from "react-icons/bs";

function Header(): JSX.Element {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Icon>
          <BsCalendar2Check />
        </S.Icon>
        <S.Title>Todo</S.Title>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
