import styled from "styled-components/native";

export interface DatetimeTextProps {
  weight?: 'bold' | 'normal',
  size?: string
}

export const DatetimeText = styled.Text<DatetimeTextProps>`
  font-family: 'Rajdhani';
  font-weight: ${({ weight = 'normal' }) => weight};
  font-size: ${({ size = '16px' }) => size};
  color: ${({ theme }) => theme.palette.primary.main};
`
