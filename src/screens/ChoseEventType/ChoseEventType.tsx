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
  const [selectedCard, setSelectedCard] = useState<IEventType | null>(null)

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
            <Paragraph>Loading</Paragraph>
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

      {selectedCard && (
      <TextIconButton
        text="Próximo"
        iconBackgroundColor="success"
        textWeight="bold"
        textSize="16px"
        style={{alignSelf: 'flex-end', marginTop: 24}}
        onPress={() => navigation.navigate('AvailableEvents', { categoryId: selectedCard.id })}
        >
        <SvgIcon width='40px' height='40px' icon="arrow" color="contrast"/>
      </TextIconButton>
      )}
    </PageRootContainer>
  )
}

export default ChoseEventType
