export default {
    name: 'player',
    type: 'document',
    title: 'Jogador de Basquete',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'posicao',
        type: 'string',
        title: 'Posicao'
      },
      {
        name: 'altura',
        type: 'number',
        title: 'Altura'
      },
      {
        name: 'posicaoDraft',
        type: 'number',
        title: 'Posicao Draft'
      },
      {
        name: 'dataDraft',
        type: 'date',
        title: 'Ano Draft'
      },
      {
        name: 'team',
        type: 'reference',
        title: 'Time',
        to: [{ type: 'teams' }]
      }
    ]
  }