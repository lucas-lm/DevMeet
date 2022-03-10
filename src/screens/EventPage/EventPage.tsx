import { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MaterialIcons } from '@expo/vector-icons';
import { setString } from 'expo-clipboard'
import { RootStackParamList } from "../../@types/navigation";
import { DateHeaderBox, EventPageRootContainer, HeaderContainer, IconButton, LinkActionBar, ScrollableContentContainer, SectionContainer } from "./EventPage.style";
import { Datetime, Highlight, Paragraph, SvgIcon, TextIconButton, Timer, Title, ProgressBar } from "../../shared/components";
import { ApiClient } from "../../shared/services";
import { View, Vibration } from 'react-native';
import { useTheme } from 'styled-components';

type EventPageProps = NativeStackScreenProps<RootStackParamList, 'EventPage'>

const EventPage = ({ navigation, route }: EventPageProps) => {
  const { eventId } = route.params
  const theme = useTheme()
  const [event, setEvent] = useState<IEvent>()
  const [progress, setProgress] = useState(0)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false)

  const updateProgress = (secondsLeft: number) => {
    setProgress(Math.max(1 - secondsLeft / 6000, 0.1))
  }

  useEffect(() => {
    ApiClient
      .getEventById(eventId)
      .then(evt => setEvent(evt))
  }, [eventId])

  useEffect(() => {
    return () => Vibration.cancel()
  }, [])

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
            <Paragraph size='20px' style={{fontFamily: 'Rajdhani'}}>
              {event?.link}
            </Paragraph>
            <View style={{flexDirection: 'row'}}>
              <IconButton onPress={() => setString(event?.link as string)}>
                <MaterialIcons name='content-copy' size={20} color={theme.palette.primary.contrast1} />
              </IconButton>
              <IconButton
                backgroundColor={isNotificationsEnabled ? '#d9534f80' : '#5bc0de80'}
                onPress={() => setIsNotificationsEnabled(n => !n)}
              >
                <MaterialIcons
                  size={20}
                  name={isNotificationsEnabled ? 'notifications-off' : 'notifications-on'}
                  color={theme.palette.primary.contrast2}
                />
              </IconButton>
              <IconButton
                backgroundColor={theme.palette.semantic.success + '80'}
                onPress={() => Vibration.cancel()}
                >
                <MaterialIcons name='arrow-forward' size={20} color={theme.palette.primary.contrast1} />
              </IconButton>
            </View>
          </LinkActionBar>
          <Paragraph size='12px' color='contrast1'
            style={{maxWidth: 300, alignSelf: 'flex-start', paddingLeft: 8}}
          >
            {isNotificationsEnabled ?
            'Você receberá um alerta quando o evento estiver começando':
            'Ative o sininho para receber uma notificação quando o evento começar'}
          </Paragraph>
        </SectionContainer>

        <SectionContainer style={{marginTop: 8}}>
          <Title size='20px' style={{marginBottom: 16}}>Tempo até o evento</Title>
          <Timer
            to={event?.dataInicio as string}
            size={32}
            onSecondsChange={updateProgress}
            onTimesUp={isNotificationsEnabled ?
              () => Vibration.vibrate([0, 500, 100, 500, 1000], true)
              : undefined}
          >
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
