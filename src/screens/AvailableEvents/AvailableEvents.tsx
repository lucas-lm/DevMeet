import { Text, View } from 'react-native'
import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { PageRootContainer, HeaderTextContainer, EventCardsContainer, EventCard, EventCardTitle, CardFooter } from "./AvailableEvents.style";
import { Paragraph, SvgIcon, TextIconButton, Title, Highlight, Datetime } from "../../shared/components";
import { ApiClient } from "../../shared/services";


type AvailableEventsPageProps = NativeStackScreenProps<RootStackParamList, 'AvailableEvents'>

const AvailableEvents = ({ navigation, route }: AvailableEventsPageProps) => {
  const categoryId = route.params?.categoryId
  const [events, setEvents] = useState<IEvent[]>([])

  const navigateToEventPage = (eventId: string) => navigation.navigate('EventPage', { eventId })

  useEffect(() => {
    ApiClient
      .getEvents(categoryId)
      .then(res => setEvents(res))
  }, [categoryId])

  return (
    <PageRootContainer>
      <TextIconButton
        text="Voltar"
        textSize="12px"
        iconFirst
        onPress={() => navigation.goBack()}
        style={{alignSelf: 'flex-end'}}
        >
        <SvgIcon icon="arrow" color="contrast" rotation={180} width='24px' height='24px'/>
      </TextIconButton>
      <HeaderTextContainer>
        <Title style={{maxWidth: 280}}>Eventos disponíveis</Title>
        <View style={{marginVertical: 8}}>
          <Paragraph>Selecione o evento desejado.</Paragraph>
          <Paragraph>E espere sua data!</Paragraph>
        </View>
      </HeaderTextContainer>
      <EventCardsContainer>
        {events.map(evt => (
          <EventCard key={evt.id} activeOpacity={0.8} onPress={() => navigateToEventPage(evt.id)}>
            <Text>
              <Datetime
                datetime={evt.dataInicio}
                outputFormat="DD/MMM"
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
    </PageRootContainer>
  )
}

export default AvailableEvents
