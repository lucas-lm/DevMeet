import styled from 'styled-components/native'

interface TimerRootContainerComponentProps {
  width?: string,
  direction?: 'row' | 'column'
}

export const TimerRootContainer = styled.View<TimerRootContainerComponentProps>`
  flex-direction: ${({ direction='row' }) => direction};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: ${({ width='auto' }) => width};
`;
