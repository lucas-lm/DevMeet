import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../@types/navigation"
import { PageRootContainer } from "./AvailableEvents.style";


type AvailableEventsPageProps = NativeStackScreenProps<RootStackParamList, 'AvailableEvents'>

const AvailableEvents = ({ navigation }: AvailableEventsPageProps) => {
  return (
    <PageRootContainer></PageRootContainer>
  )
}

export default AvailableEvents
