interface IEventType {
  id: number,
  icon: string,
  text: string,
  count?: number
}

interface IEvent {
  id: string,
  tipoId: number,
  dataInicio: string,
  dataPublicacao: string,
  descricao: string,
  link: string,
  organizador: string
  titulo: string
}

interface IApiResponseType {
  tipo: IEventType[],
  events: IEvent[]
}
