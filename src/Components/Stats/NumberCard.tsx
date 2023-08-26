import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import { DARK, MAIN_COLOR, WHITE } from "../../constants/colors";
interface CardProps {
  hasAction?: boolean;
}

export const Card = styled.div<CardProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  transition: all 0.5s ease;

  ${(props) =>
    props.hasAction &&
    `
cursor: pointer;
  &:hover {
    color: ${MAIN_COLOR};
    background-color: ${WHITE};
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px 0px;

    h4 {
      color: ${MAIN_COLOR};
    }
  }`}
`;

export type variant = "normal" | "small" | "large";

interface NumberProps {
  variant?: variant;
}

const numberSizeVariant = (variant?: variant) => {
  switch (variant) {
    case "normal":
      return "2.4rem";
    case "small":
      return "1.8rem";
    case "large":
      return "3.2rem";
    default:
      return "2.4rem";
  }
};

export const Number = styled.h4<NumberProps>`
  display: flex;
  color: ${DARK};
  font-size: ${(props) => numberSizeVariant(props.variant)};
  margin: 0 0 5px 0;
  padding: 0;
  font-weight: ${(props) => (props.variant === "large" ? "800" : "600")};
`;

export const Label = styled.span`
  font-size: 1.2rem;
`;

export interface NumberCardProps {
  number: number;
  label: string;
  money?: boolean;
  variant?: variant;
  action?: () => void;
}

export const NumberCard = ({
  number,
  label,
  money,
  variant = "normal",
  action,
}: NumberCardProps) => {
  return (
    <Card onClick={action} hasAction={!!action}>
      <Number variant={variant}>
        {money && "R$ "}
        <CountUp end={number} separator="," />
      </Number>
      <Label>{label}</Label>
    </Card>
  );
};
