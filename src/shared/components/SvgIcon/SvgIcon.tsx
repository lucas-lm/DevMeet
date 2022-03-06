import IPhoneXOrange from '../../../../assets/svg/IPhone-X-Orange.svg'
import IPhoneXWhite from '../../../../assets/svg/IPhone-X-White.svg'
import ArrowOrange from '../../../../assets/svg/Arrow-Orange.svg'
import ArrowWhite from '../../../../assets/svg/Arrow-White.svg'
import ProgramingTerminalOrange from '../../../../assets/svg/Programming-Terminal-Orange.svg'
import ProgramingTerminalWhite from '../../../../assets/svg/Programming-Terminal-White.svg'
import LaptopProgrammingCodeOrange from '../../../../assets/svg/Laptop-Programming-Code-Orange.svg'
import LaptopProgrammingCodeWhite from '../../../../assets/svg/Laptop-Programming-Code-White.svg'
import HierarchyCodeOrange from '../../../../assets/svg/Hierarchy-Orange.svg'
import HierarchyCodeWhite from '../../../../assets/svg/Hierarchy-White.svg'
import TerminalOrange from '../../../../assets/svg/Terminal-Orange.svg'
import TerminalWhite from '../../../../assets/svg/Terminal-White.svg'
import BezierCurveOrange from '../../../../assets/svg/Bezier-Curve-Orange.svg'
import BezierCurveWhite from '../../../../assets/svg/Bezier-Curve-White.svg'
import BlocksCodeCheckmarkOrange from '../../../../assets/svg/Blocks-Code-Checkmark-Orange.svg'
import BlocksCodeCheckmarkWhite from '../../../../assets/svg/Blocks-Code-Checkmark-White.svg'
import { SvgProps } from 'react-native-svg'

export const WhiteIcons = {
  Arrow: ArrowWhite,
  IPhone: IPhoneXWhite,
  ProgramingTerminal: ProgramingTerminalWhite,
  LaptopProgrammingCode: LaptopProgrammingCodeWhite,
  HierarchyCode: HierarchyCodeWhite,
  Terminal: TerminalWhite,
  BezierCurve: BezierCurveWhite,
  BlocksCodeCheckmark: BlocksCodeCheckmarkWhite
}

export const OrangeIcons = {
  Arrow: ArrowOrange,
  IPhone: IPhoneXOrange,
  ProgramingTerminal: ProgramingTerminalOrange,
  LaptopProgrammingCode: LaptopProgrammingCodeOrange,
  HierarchyCode: HierarchyCodeOrange,
  Terminal: TerminalOrange,
  BezierCurve: BezierCurveOrange,
  BlocksCodeCheckmark: BlocksCodeCheckmarkOrange
}

interface SvgIconsProps extends SvgProps {
  color?: 'main' | 'contrast',
  icon: string
}

const SvgIcon: React.FC<SvgIconsProps> = ({ color='main', icon, ...rest }) => {
  const colorIcon = color === 'main' ? OrangeIcons : WhiteIcons
  switch (icon.toLowerCase()) {
    case 'arrow':
      return <colorIcon.Arrow {...rest} />
    case 'programing':
      return <colorIcon.ProgramingTerminal {...rest} />
    case 'laptop':
      return <colorIcon.LaptopProgrammingCode {...rest} />
    case 'integration':
      return <colorIcon.HierarchyCode {...rest} />
    case 'blocks_code_checkmark':
      return <colorIcon.BlocksCodeCheckmark {...rest} />
    case 'terminal':
      return <colorIcon.Terminal {...rest} />
    case 'bezier_curve':
      return <colorIcon.BezierCurve {...rest} />
    case 'mobile':
      return <colorIcon.IPhone {...rest} />

    default:
      throw new Error('Invalid icon')
  }
}

export default SvgIcon
