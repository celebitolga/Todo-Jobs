import { memo } from "react";

// styles
import * as S from "./styles.styled";

interface Props {
  variant?: "urgent" | "regular" | "trivial" | "gray" | "ghost";
  wFull?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  type?: "submit";
  icon?: React.ReactElement;
}

function Button({
  variant,
  wFull,
  onClick,
  children,
  type,
  icon,
}: Props): JSX.Element {
  return (
    <S.Button
      onClick={onClick}
      type={type}
      className={`
        ${wFull ? "-w-full" : ""} 
        ${variant ? `-${variant}` : ""} 
        ${icon ? "-with-icon" : ""}
      `}
    >

      {icon && (
        <S.Icon className={`${variant ? `-${variant}` : ""}`}>{icon}</S.Icon>
      )}

      {children}
    </S.Button>
  );
}

export default memo(Button);
