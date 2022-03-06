import styled, { DefaultTheme } from "styled-components/native";

interface IconContainerProps {
  iconBackgroundColor?: 'main' | 'success'
}

interface TextContainerProps {
  textSize?: string
}

const mapIconColorOptions = (theme: DefaultTheme, opt?: string) => {
  switch (opt) {
    case 'main':
      return theme.palette.primary.main;
    case 'success':
      return theme.palette.semantic.success
    default:
      return 'transparent';
  }
}

export const RootContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
`

export const IconContainer = styled.View<IconContainerProps>`
  background-color: ${({ iconBackgroundColor, theme }) => mapIconColorOptions(theme, iconBackgroundColor)};
  border-radius: 8px;
  margin: 0 8px;
`

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: 'Epilogue';
  font-weight: normal;
  font-size: ${( { textSize='16px' } ) => textSize};
  color: ${({ theme }) => theme.palette.primary.contrast1};
`
