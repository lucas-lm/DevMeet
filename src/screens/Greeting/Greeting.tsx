import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation';
import { GreetingRootContainer, TextContainer } from './Greeting.style';
import { Title, Highlight, Paragraph, TextIconButton } from '../../shared/components';
import Person from '../../../assets/svg/person.svg';
import ArrowOrange from '../../../assets/svg/Arrow-White.svg';

type GreetingPageNavProps = NativeStackScreenProps<RootStackParamList, 'Greeting'>;

const Greeting = ({ navigation }: GreetingPageNavProps) => {
  return (
    <GreetingRootContainer>
      <TextContainer>
        <Title>Olá, Dev<Highlight>!</Highlight></Title>
        <Paragraph style={{marginVertical: 16, lineHeight: 32}} size='24px'>
          Encontre o seu <Highlight bg='main' color='contrast1' weight='normal'>próximo</Highlight> evento de programação!
        </Paragraph>
      </TextContainer>
      <Person height='45%' style={{maxHeight: 300, marginVertical: 8}}/>
      <TextIconButton iconBackgroundColor='main' onPress={() => navigation.navigate('')}>
        <ArrowOrange width='40px' height='40px' />
      </TextIconButton>
    </GreetingRootContainer>
  )
}

export default Greeting
