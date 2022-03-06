import { TouchableOpacityProps, View } from 'react-native'
import { ComponentRootContainer, EventCountText, Title } from './EventTypeCard.style'
import { Highlight, SvgIcons } from '../'

interface EventTypeCardProps extends TouchableOpacityProps {
  selected?: boolean,
  eventCount?: number,
  icon: string,
  text: string,
}


const EventTypeCard: React.FC<EventTypeCardProps> = ({selected, icon, text, eventCount, ...rest}) => {
  return (
    <ComponentRootContainer {...rest} active={selected}>
      <View>
        <SvgIcons icon={icon} color={selected ? 'contrast' : 'main'} height='40px'/>
        <Title active={selected} style={{marginTop: 8}}>{text}</Title>
      </View>
      {eventCount &&
        <EventCountText active={selected}>
          <Highlight color={selected ? 'contrast1' : 'main'}>
            {eventCount} {eventCount > 1 ? 'eventos' : 'evento'}
          </Highlight> {eventCount > 1 ? 'encontrados' : 'encontrado'}
        </EventCountText>
      }
    </ComponentRootContainer>
  )
}

export default EventTypeCard
