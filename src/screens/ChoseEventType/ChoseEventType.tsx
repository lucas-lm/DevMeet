import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { useEffect, useState } from "react";
import { CardsContainer, PageRootContainer, TextContainer } from "./ChoseEventType.style";
import { Paragraph, TextIconButton, Title, EventTypeCard, SvgIcon } from "../../shared/components";
import { ApiClient } from "../../shared/services";


type ChoseEventTypePageProps = NativeStackScreenProps<RootStackParamList, 'ChoseEventType'>;

const ChoseEventType = ({ navigation }: ChoseEventTypePageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [eventTypes, setEventTypes] = useState<IEventType[]>([])
  const [selectedCard, setSelectedCard] = useState<IEventType>()

  useEffect(() => {
    ApiClient
      .getEventTypes()
      .then(apiResponse => {
        setEventTypes(apiResponse)
        setIsLoading(false)
      })
      .catch(console.error)

    return () => {
      // TODO: Cancel request in clean up
    }
  }, [])

  return (
    <PageRootContainer>
      <TextContainer>
        <Title>Que tipo de evento você procura?</Title>
        <Paragraph style={{maxWidth: 240}}>Selecione a categoria que mais te agrada!</Paragraph>
      </TextContainer>
      <CardsContainer>
          {isLoading ? (
            <Paragraph size="32px">{'<Loading />'}</Paragraph>
          ) : ( eventTypes.map(e => (
            <EventTypeCard
              key={e.id}
              selected={e.id === selectedCard?.id}
              icon={e.icon}
              text={e.text}
              style={{margin: 6}}
              eventCount={5}
              onPress={() => setSelectedCard(e)}
            />
          )))}
      </CardsContainer>

      <TextIconButton
        text="Próximo"
        iconBackgroundColor="main"
        textWeight="bold"
        textSize="16px"
        style={{alignSelf: 'flex-end', marginTop: 24, opacity: selectedCard ? 1 : 0.1}}
        disabled={!selectedCard}
        onPress={() => navigation.navigate(
            'AvailableEvents',
            selectedCard ? { categoryId: selectedCard.id } : undefined
          )}
        >
        <SvgIcon width='40px' height='40px' icon="arrow" color="contrast"/>
      </TextIconButton>

    </PageRootContainer>
  )
}

export default ChoseEventType
