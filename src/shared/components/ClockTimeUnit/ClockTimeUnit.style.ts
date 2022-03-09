import styled from "styled-components/native";

interface TimeAmountCommonProps {
  size?: number
}

const DEFAULT_SIZE = 24*3

export const ClockValue = styled.Text<TimeAmountCommonProps>`
  font-family: 'Rajdhani';
  font-size: ${({ size=DEFAULT_SIZE }) => size}px;
  color: ${({ theme }) => theme.palette.primary.contrast1};
  align-items: center;
  justify-content: center;
`;

export const ClockUnit = styled.Text<TimeAmountCommonProps>`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.primary.contrast1}80;
  font-size: ${({ size=DEFAULT_SIZE }) => size/3}px;
`;
