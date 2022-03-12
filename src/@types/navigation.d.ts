export type RootStackParamList = {
  Greeting: undefined;
  ChoseEventType: undefined;
  AvailableEvents: { categoryId: number } | undefined;
  EventPage: { eventId: string };
  EventWebView: { uri?: string, title?: string };
};
