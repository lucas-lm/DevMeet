import { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../../@types/navigation";
import { DateHeaderBox, EventPageRootContainer, HeaderContainer, LinkActionBar, ScrollableContentContainer, SectionContainer } from "./EventPage.style";
import { Datetime, Highlight, Paragraph, SvgIcon, TextIconButton, Title } from "../../shared/components";
import { ApiClient } from "../../shared/services";
import { View } from 'react-native';

type EventPageProps = NativeStackScreenProps<RootStackParamList, 'EventPage'>

const EventPage = ({ navigation, route }: EventPageProps) => {
  const { eventId } = route.params
  const [event, setEvent] = useState<IEvent>()

  useEffect(() => {
    ApiClient
      .getEventById(eventId)
      .then(evt => setEvent(evt))
  }, [eventId])

  return (
    <EventPageRootContainer>
      <HeaderContainer>
        <DateHeaderBox>
          <Datetime
            datetime={event?.dataInicio as string}
            size='24px' weight='bold' outputFormat='DD/MMM'
            style={{textTransform: 'uppercase'}}/>
          <Datetime
            datetime={event?.dataInicio as string}
            size='24px' outputFormat='HH:mm'/>
        </DateHeaderBox>

        <TextIconButton text='Voltar' iconFirst textSize='12px' onPress={() => navigation.goBack()}>
          <SvgIcon icon='arrow' rotation={180} color='contrast' width='24px' height='24px'/>
        </TextIconButton>
      </HeaderContainer>

      <ScrollableContentContainer>
        <SectionContainer>
          <Title size='28px'>{event?.titulo}</Title>
          <Paragraph size='12px' style={{lineHeight: 20, marginVertical: 16}}>{event?.descricao}</Paragraph>
          <Paragraph size='10px'>
            Organizado por: <Highlight color='contrast1'>{event?.organizador}</Highlight>
          </Paragraph>
        </SectionContainer>

        <SectionContainer style={{alignItems: 'center'}}>
          <Title size='24px'>Link do evento</Title>
          <LinkActionBar>
            <Paragraph size='16px' style={{fontFamily: 'Rajdhani'}}>{event?.link}</Paragraph>
            <View style={{flexDirection: 'row'}}>
              <TextIconButton iconBackgroundColor='main' >
                <SvgIcon icon='mobile' color='contrast' width='32px' height='32px'/>
              </TextIconButton>
              <TextIconButton iconBackgroundColor='success'>
                <SvgIcon icon='arrow' color='contrast' width='32px' height='32px'/>
              </TextIconButton>
            </View>
          </LinkActionBar>
        </SectionContainer>

        <SectionContainer>
          <Title size='16px'>Tempo até o evento</Title>
          <Paragraph>Countdown vai aqui</Paragraph>
          <Paragraph>Countdown vai aqui</Paragraph>
        </SectionContainer>
      </ScrollableContentContainer>
    </EventPageRootContainer>
  )
}

export default EventPage
