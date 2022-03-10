import { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../../@types/navigation";
import { DateHeaderBox, EventPageRootContainer, HeaderContainer, LinkActionBar, ScrollableContentContainer, SectionContainer } from "./EventPage.style";
import { Datetime, Highlight, Paragraph, SvgIcon, TextIconButton, Timer, Title, ProgressBar } from "../../shared/components";
import { ApiClient } from "../../shared/services";
import { View } from 'react-native';
import { useTheme } from 'styled-components';

type EventPageProps = NativeStackScreenProps<RootStackParamList, 'EventPage'>

const EventPage = ({ navigation, route }: EventPageProps) => {
  const { eventId } = route.params
  const theme = useTheme()
  const [event, setEvent] = useState<IEvent>()
  const [progress, setProgress] = useState(0)

  const handleSecondsChange = (secondsLeft: number) => {
    const p = Math.max(1 - secondsLeft / 6000, 0.1)
    setProgress(p)
  }

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
            size='32px' outputFormat='DD/MMM'
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
          <Title size='20px' style={{marginVertical: 24}}>Tempo até o evento</Title>
          <Timer to={event?.dataInicio as string} size={32} onSecondsChange={handleSecondsChange}>
            <Title>O evento já está rolando! 🎉🎉🎉</Title>
          </Timer>
          <ProgressBar
            width={300}
            progress={progress}
            barColor={progress < 0.9 ? theme.palette.primary.main : theme.palette.semantic.success}
            style={{alignSelf: 'center', marginVertical: 16}}
            />
        </SectionContainer>
      </ScrollableContentContainer>
    </EventPageRootContainer>
  )
}
export default EventPage
