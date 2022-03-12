import { Text, View } from 'react-native'
import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { PageRootContainer, EventCardsContainer, EventCard, EventCardTitle, CardFooter } from "./AvailableEvents.style";
import { Paragraph, SvgIcon, TextIconButton, Title, Highlight, Datetime } from "../../shared/components";
import { ApiClient } from "../../shared/services";


type AvailableEventsPageProps = NativeStackScreenProps<RootStackParamList, 'AvailableEvents'>

const AvailableEvents = ({ navigation, route }: AvailableEventsPageProps) => {
  const categoryId = route.params?.categoryId
  const [events, setEvents] = useState<IEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigateToEventPage = (eventId: string) => navigation.navigate('EventPage', { eventId })

  useEffect(() => {
    ApiClient
      .getEvents(categoryId)
      .then(res => {
        setEvents(res)
        setIsLoading(false)
      })
  }, [categoryId])

  return (
    <PageRootContainer>
      <View style={{flexDirection: 'row'}}>
        <Title style={{flex: 1}}>Eventos disponíveis</Title>
        <TextIconButton
          text="Voltar"
          textSize="12px"
          iconFirst
          onPress={() => navigation.goBack()}
          style={{alignSelf: 'flex-start'}}
          >
          <SvgIcon icon="arrow" color="contrast" rotation={180} width='24px' height='24px'/>
        </TextIconButton>
      </View>
      <View style={{alignSelf: 'flex-start', marginVertical: 8}}>
        <Paragraph>Selecione o evento desejado.</Paragraph>
        <Paragraph>E espere sua data!</Paragraph>
      </View>
      {isLoading ? (
        <Paragraph
          size='32px'
          style={{marginVertical: 16, backgroundColor: '#454545', padding: 8, borderRadius: 4}}
          >
          {'<Loading... />'}
        </Paragraph>
      ) : (
        <EventCardsContainer>
          {events.map(evt => (
            <EventCard key={evt.id} activeOpacity={0.8} onPress={() => navigateToEventPage(evt.id)}>
              <Text>
                <Datetime
                  datetime={evt.dataInicio}
                  outputFormat="DD/MMM/YYYY"
                  style={{textTransform: 'uppercase'}}
                /> - <Datetime datetime={evt.dataInicio} outputFormat="HH:mm"/>
              </Text>
              <EventCardTitle>{evt.titulo}</EventCardTitle>
              <Paragraph size="10px" numberOfLines={3}>{evt.descricao}</Paragraph>
              <CardFooter>
                <Paragraph size="8px">
                  Organizado por: <Highlight style={{color: '#282828'}}>{evt.organizador}</Highlight>
                </Paragraph>
                <TextIconButton onPress={() => navigateToEventPage(evt.id)}>
                  <SvgIcon icon='arrow' width='24px' height="24px"/>
                </TextIconButton>
              </CardFooter>
            </EventCard>
          ))}
          <Paragraph size='12px' style={{alignSelf: 'center'}}>Sem mais eventos...</Paragraph>
        </EventCardsContainer>
      )}
    </PageRootContainer>
  )
}

export default AvailableEvents
