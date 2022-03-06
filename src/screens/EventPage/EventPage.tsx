import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../../@types/navigation";
import { EventPageRootContainer } from "./EventPage.style";

type EventPageProps = NativeStackScreenProps<RootStackParamList, 'EventPage'>

const EventPage = ({ navigation }: EventPageProps) => {
  return (
    <EventPageRootContainer></EventPageRootContainer>
  )
}

export default EventPage
