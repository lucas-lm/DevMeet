import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { WebView } from 'react-native-webview'
import { RootStackParamList } from '../../@types/navigation'

export type EventWebViewProps = NativeStackScreenProps<RootStackParamList, 'EventWebView'>

const html = '<h1>Não tem nada por aqui :(</h1>'

const EventWebView = ({ route }: EventWebViewProps) => {
  const { uri } = route.params
  return (
    <WebView source={uri ? { uri } : { html }}/>
  )
}

export default EventWebView
