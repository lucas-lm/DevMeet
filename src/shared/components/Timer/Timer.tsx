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
  onTimesUp?: (startedAt: string, to: string) => void
}

const DEFAULT_SIZE = 16*3

const Timer: React.FC<TimerComponentProps> = ({ children, to, dtFormat, size=DEFAULT_SIZE, width, direction='row', onTimesUp }) => {
  const date = dtFormat ? moment(to, dtFormat) : moment.utc(to)
  const startedAt = moment()
  const [now, setNow] = useState<Moment>(startedAt)
  const timeFromNow = (u: 'days' | 'hours' | 'minutes' | 'seconds') => date.diff(now, u)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNow(moment())
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [now])

  if (timeFromNow('seconds') <= 0) {
    onTimesUp && onTimesUp(startedAt.toString(), to)
    return <>{children}</>
  }

  return (
    <TimerRootContainer width={width} direction={direction}>
      <ClockTimeUnit value={timeFromNow('days')} unit='dias' size={size}/>
      <ClockTimeUnit value={timeFromNow('hours') % 24} unit='horas' size={size}/>
      <ClockTimeUnit value={timeFromNow('minutes') % 60} unit='minutos' size={size}/>
      <ClockTimeUnit value={timeFromNow('seconds') % 60} unit='segundos' size={size}/>
    </TimerRootContainer>
  )
}

export default Timer
