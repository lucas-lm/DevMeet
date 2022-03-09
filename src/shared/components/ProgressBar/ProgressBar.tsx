import { ViewStyle } from "react-native";
import { InnerView, OuterView, ProgressBarStyledProps } from "./ProgressBar.style";

interface ProgressBarComponentProps extends ProgressBarStyledProps {
  progress: number,
  style: ViewStyle
}

const ProgressBar: React.FC<ProgressBarComponentProps> = ({ width, progress, barColor, backgroundColor, style }) => {
  progress = Math.min(progress, 1)
  progress = Math.max(progress, 0)

  return (
    <OuterView width={width} backgroundColor={backgroundColor} style={style}>
      <InnerView width={width * progress} barColor={barColor}/>
    </OuterView>
  )
}

export default ProgressBar
