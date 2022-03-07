import styled from "styled-components/native";
import { Title } from "../../shared/components";

export const PageRootContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 328px;
  margin: 0 auto;
`;

export const HeaderTextContainer = styled.View`
  max-width: 300px;
  align-self: flex-start;
  margin-bottom: 16px;
`;

export const EventCardsContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'center',
    maxWidth: 328
  }
}))`
  flex-grow: 0;
  max-height: 400px;
`;

export const EventCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.primary.contrast1};
  margin: 8px 0;
  border-radius: 8px;
  padding: 4px 16px;
  justify-content: space-around;
  height: 200px;
`;

export const EventCardTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.gray.background};
  font-size: 20px;
`;

export const CardFooter = styled.View`
  height: auto;
  margin: 0;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
