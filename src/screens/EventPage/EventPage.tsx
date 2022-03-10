import { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MaterialIcons } from '@expo/vector-icons';
import { setString } from 'expo-clipboard'
import { RootStackParamList } from "../../@types/navigation";
import { DateHeaderBox, EventPageRootContainer, HeaderContainer, IconButton, LinkActionBar, ScrollableContentContainer, SectionContainer } from "./EventPage.style";
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
            <Paragraph size='20px' style={{fontFamily: 'Rajdhani'}}>{event?.link}</Paragraph>
            <View style={{flexDirection: 'row'}}>
              <IconButton onPress={() => setString(event?.link as string)}>
                <MaterialIcons name='content-copy' size={20} color={theme.palette.primary.contrast1} />
              </IconButton>
              <IconButton onPress={() => console.log(event?.link as string)}>
                <MaterialIcons name='notifications' size={20} color={theme.palette.primary.contrast2} />
              </IconButton>
              <IconButton
                backgroundColor={theme.palette.semantic.success + '80'}
                onPress={() => console.log('event?.link as string')}
                >
                <MaterialIcons name='arrow-forward' size={20} color={theme.palette.primary.contrast1} />
              </IconButton>
            </View>
          </LinkActionBar>
          <Paragraph size='12px'>Ative o sininho para receber uma notificação quando o evento começar</Paragraph>
          <Paragraph size='12px'>Você receberá um alerta quando o evento estiver começando</Paragraph>
        </SectionContainer>

        <SectionContainer style={{marginTop: 8}}>
          <Title size='20px' style={{marginBottom: 16}}>Tempo até o evento</Title>
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
