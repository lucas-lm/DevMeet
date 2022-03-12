import styled from "styled-components/native";

export const PageRootContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  max-width: 320px;
  margin: 0 auto;
`

export const TextContainer = styled.View`
  margin: 16px 0;
`

export const CardsContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 296
  }
}))`
  flex-grow: 0;
`
