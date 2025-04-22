export const getMockSchema = async () => {
    return {
      type: 'View',
      children: [
        {
          type: 'Text',
          props: {
            text: 'Olá, esta tela veio do servidor!!!',
          },
        },
        {
          type: 'Button',
          props: {
            title: 'Clique aqui',
          },
        },
      ],
    }
  }