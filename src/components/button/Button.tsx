import { colors } from "consts/colors";
import React from "react";
import styled from "styled-components";

interface I_buttonProps {
  type?: "primary" | "secondary" | "ghost";
  children?: React.ReactNode;
  block?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = styled(
  ({
    children,
    type = "primary",
    disabled,
    block = false,
    onClick,
    ...props
  }: I_buttonProps) => (
    <button {...props} type="button" onClick={!disabled ? onClick : () => {}}>
      {children}
    </button>
  )
)`
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed " : "pointer")};
  border-raduise: 5px;
  display: inline-flex;
  align-items: center;
  width: ${({ block }) => (block ? "100%" : "fit-content")};
  justify-content: ${({ block }) => (block ? "center" : "initial")};
  font-size: 14px;
  padding: 10px 22px;
  letter-spacing: 0.36px;

  border: 1px solid
    ${({ type }) => (type === "ghost" ? colors.primery : "transparent")};

  background-color: ${({ type, disabled }) => {
    if (disabled) return "#c2c2c2";
    switch (type) {
      case "primary":
        return colors.primery;
      case "secondary":
        return colors.secondary;
      case "ghost":
        return "transparent";

      default:
        break;
    }
  }};
`;

export default Button;
