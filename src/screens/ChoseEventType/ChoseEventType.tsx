import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { CardsContainer, PageRootContainer, TextContainer } from "./ChoseEventType.style";
import { Paragraph, TextIconButton, Title, EventTypeCard } from "../../shared/components";
import ArrowWhite from '../../../assets/svg/Arrow-White.svg'

type ChoseEventTypePageProps = NativeStackScreenProps<RootStackParamList, 'ChoseEventType'>;

const ChoseEventType = ({ navigation }: ChoseEventTypePageProps) => {
  return (
    <PageRootContainer>
      <TextContainer>
        <Title>Que tipo de evento você procura?</Title>
        <Paragraph style={{maxWidth: 240}}>Selecione a categoria que mais te agrada!</Paragraph>
      </TextContainer>
      <CardsContainer>
          <EventTypeCard icon='PROGRAMING' text='Construindo interfaces' style={{margin: 6}} eventCount={5}/>
          <EventTypeCard icon='LAPTOP' text='Construindo interfaces' selected style={{margin: 6}} eventCount={5}/>
          <EventTypeCard icon='INTEGRATION' text='Desenvolvimento front-end' style={{margin: 6}} />
          <EventTypeCard icon='BLOCKS_CODE_CHECKMARK' text='Git e DevOps' style={{margin: 6}} eventCount={2}/>
          <EventTypeCard icon='LAPTOP' text='Servidores Linux' style={{margin: 6}} eventCount={1}/>
          <EventTypeCard icon='TERMINAL' text='Serverless' style={{margin: 6}} eventCount={3}/>
          <EventTypeCard icon='BEZIER_CURVE' text='Serverless' style={{margin: 6}} eventCount={3}/>
          <EventTypeCard icon='MOBILE' text='Serverless' style={{margin: 6}} eventCount={3}/>
      </CardsContainer>

      <TextIconButton
        text="Próximo"
        iconBackgroundColor="success"
        textWeight="bold"
        textSize="16px"
        style={{alignSelf: 'flex-end', marginTop: 24}}
        onPress={() => navigation.navigate('AvailableEvents')}
        >
        <ArrowWhite width='40px' height='40px' />
      </TextIconButton>
    </PageRootContainer>
  )
}

export default ChoseEventType
