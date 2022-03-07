import moment from "moment"
import 'moment/locale/pt-br'
import { TextProps } from "react-native"
import { DatetimeText, DatetimeTextProps } from "./Datetime.style"

interface DatetimeComponentProps extends DatetimeTextProps, TextProps {
  datetime: string,
  inputFormat?: string,
  outputFormat?: string,
  locale?: string
}

const Datetime: React.FC<DatetimeComponentProps> = ({ datetime, inputFormat=null, outputFormat="LLL", ...rest }) => {
  const date = inputFormat ? moment(datetime, inputFormat) : moment.utc(datetime)
  return (
    <DatetimeText {...rest}>
      {date.format(outputFormat)}
    </DatetimeText>
  )
}

export default Datetime
