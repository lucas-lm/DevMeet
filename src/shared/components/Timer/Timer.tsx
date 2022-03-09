import moment, { Moment } from "moment";
import { TimerRootContainer } from "./Timer.style"
import ClockTimeUnit from "../ClockTimeUnit/ClockTimeUnit"
import { useEffect, useState } from "react";

interface TimerComponentProps {
  to: string;
  dtFormat?: string,
  size?: number,
  width?: string,
  direction?: 'row' | 'column',
  onTimesUp?: () => void,
  onMinutesChange?: (reaminingTime: number) => void
  onSecondsChange?: (reaminingTime: number) => void
}

const DEFAULT_SIZE = 16*3

const Timer: React.FC<TimerComponentProps> = ({
  children,
  to, dtFormat,
  size=DEFAULT_SIZE,
  width, direction='row',
  onTimesUp, onMinutesChange, onSecondsChange
}) => {
  const date = dtFormat ? moment(to, dtFormat) : moment.utc(to)
  const [now, setNow] = useState<Moment>(moment())
  const timeFromNow = (u: 'days' | 'hours' | 'minutes' | 'seconds') => date.diff(now, u)

  const secondsLeft = timeFromNow('seconds')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSecondsChange && onSecondsChange(secondsLeft)
      setNow(moment())
    }, 1000)

    if (secondsLeft % 60 === 0) {
      onMinutesChange && onMinutesChange(secondsLeft)
    }

    return () => clearTimeout(timeoutId)
  }, [now])

  if (timeFromNow('seconds') <= 0) {
    onTimesUp && onTimesUp()
    return <>{children}</>
  }

  return (
    <TimerRootContainer width={width} direction={direction}>
      <ClockTimeUnit value={timeFromNow('days')} unit='dias' size={size}/>
      <ClockTimeUnit value={timeFromNow('hours') % 24} unit='horas' size={size}/>
      <ClockTimeUnit value={timeFromNow('minutes') % 60} unit='minutos' size={size}/>
      <ClockTimeUnit value={secondsLeft % 60} unit='segundos' size={size}/>
    </TimerRootContainer>
  )
}

export default Timer
