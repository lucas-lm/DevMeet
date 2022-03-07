import styled from 'styled-components/native'

export const EventPageRootContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  margin: 0 auto;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 16px 0;
`

export const DateHeaderBox = styled.View`
  flex: 1;
`

export const ScrollableContentContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  }
}))`
  flex-grow: 0;
  max-height: 70%;
`

export const SectionContainer = styled.View`
  margin: 20px 0;
  align-self: stretch;
  align-items: flex-start;
`

export const LinkActionBar = styled.View`
  background-color: ${({ theme }) => theme.palette.gray.gray300};
  padding: 0 4px 0  16px;
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  opacity: 0.6;
  margin: 24px 0;
`
