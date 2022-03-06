import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { PageRootContainer } from "./ChoseEventType.style";

type ChoseEventTypePageProps = NativeStackScreenProps<RootStackParamList, 'ChoseEventType'>;

const ChoseEventType = ({ navigation }: ChoseEventTypePageProps) => {
  return (
    <PageRootContainer>

    </PageRootContainer>
  )
}

export default ChoseEventType
