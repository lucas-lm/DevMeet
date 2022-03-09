import { ClockUnit, ClockValue } from "./ClockTimeUnit.style"

interface ClockTimeUnitProps {
  value: string | number,
  unit?: string,
  size?: number
}

const ClockTimeUnit: React.FC<ClockTimeUnitProps> = ({ value, unit='', size }) => {
  return (
    <ClockValue size={size}>{value}<ClockUnit size={size}>{unit}</ClockUnit></ClockValue>
  )
}

export default ClockTimeUnit
