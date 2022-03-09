import styled from "styled-components/native"

export interface ProgressBarStyledProps {
  backgroundColor?: string,
  barColor?: string,
  width: number
}

export const OuterView = styled.View<ProgressBarStyledProps>`
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.palette.gray.gray300};
  width: ${({ width }) => width}px;
  height: 6px;
  border-radius: 8px;
`;

export const InnerView = styled(OuterView)`
  background-color: ${({ barColor, theme }) => barColor || theme.palette.primary.main};
  width: ${({ width }) => width}px;
`;
