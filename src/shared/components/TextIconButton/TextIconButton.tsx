import { TouchableOpacityProps } from "react-native";
import { IconContainer, RootContainer, TextContainer } from "./TextIconButton.style";

interface TextIconButtonProps extends TouchableOpacityProps {
  text?: string,
  iconBackgroundColor?: 'main' | 'success',
  textSize?: string,
  iconFirst?: boolean,
  textWeight?: 'normal' | 'bold'
}

const TextIconButton: React.FC<TextIconButtonProps> = ({ children, text, iconBackgroundColor, textSize, textWeight, iconFirst=false, ...rest }) => {
  return (
    <RootContainer {...rest}>
      {iconFirst? (<>
        <IconContainer iconBackgroundColor={iconBackgroundColor}>{children}</IconContainer>
        <TextContainer textSize={textSize} textWeight={textWeight}>{text}</TextContainer>
        </>)
        :
        (<>
        <TextContainer textSize={textSize} textWeight={textWeight}>{text}</TextContainer>
        <IconContainer iconBackgroundColor={iconBackgroundColor}>{children}</IconContainer>
        </>)
      }

    </RootContainer>
  )
}

export default TextIconButton
