import { IconContainer, RootContainer, TextContainer } from "./TextIconButton.style";

interface TextIconButtonProps {
  text?: string,
  iconBackgroundColor?: 'main' | 'success',
  textSize?: string,
  iconFirst?: boolean
}

const TextIconButton: React.FC<TextIconButtonProps> = ({ children, text, iconBackgroundColor, textSize, iconFirst=false }) => {
  return (
    <RootContainer>
      {iconFirst? (<>
        <IconContainer iconBackgroundColor={iconBackgroundColor}>{children}</IconContainer>
        <TextContainer textSize={textSize}>{text}</TextContainer>
        </>)
        :
        (<>
        <TextContainer textSize={textSize}>{text}</TextContainer>
        <IconContainer iconBackgroundColor={iconBackgroundColor}>{children}</IconContainer>
        </>)
      }

    </RootContainer>
  )
}

export default TextIconButton
