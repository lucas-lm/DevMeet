import { StyleSheet, View } from 'react-native';

import styled from "styled-components/native"

const MyText = styled.Text`
  color: ${({ theme }) => theme.palette.primary.contrast1};
  background-color: ${({ theme }) => theme.palette.primary.main};
`

const Greeting = () => {
  return (
    <View style={styles.container}>
      <MyText style={{fontFamily: 'Rajdhani', fontWeight: 'normal'}}>Hello World!</MyText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Greeting
