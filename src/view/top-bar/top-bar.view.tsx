import { ReactNode } from "react";
import { primaryColor } from "../../styles/colors.ts";
import { Div } from "./top-bar.styled.ts";
import { Btn, FancyBtn } from "../../styles/buttons.styled.ts";


interface Props {
  children?: ReactNode;
}

export function TopBar({ children }: Props) {
  return (
    <Div>
      <h1>{children}</h1>
      <Btn>Click me</Btn>
      <Btn bg={primaryColor}>Click me</Btn>
      <FancyBtn bg="orange">Click me</FancyBtn>
      <FancyBtn bg="lime">Click me</FancyBtn>
      <img className="logo" src="./icons/logo.svg" alt="logo" />
    </Div>
  );
}
