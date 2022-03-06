import styled from "styled-components/native";

interface EventTypeCardCommonProps {
  active?: boolean
}

export const ComponentRootContainer = styled.TouchableOpacity<EventTypeCardCommonProps>`
  width: 136px;
  height: 148px;
  background-color: ${({ active, theme }) => active ? theme.palette.primary.main : theme.palette.primary.contrast1};
  border-radius: 8px;
  padding: 8px;
  justify-content: space-between;
`

export const Title = styled.Text<EventTypeCardCommonProps>`
  font-family: 'Epilogue';
  font-size: 16px;
  color: ${({ active, theme }) => active ? theme.palette.primary.contrast1 : theme.palette.gray.background};
  `

export const EventCountText = styled.Text<EventTypeCardCommonProps>`
  font-family: 'Epilogue';
  font-size: 10px;
  color: ${({ active, theme }) => active ? theme.palette.primary.contrast1 : theme.palette.gray.gray300};
`
