let participantes = [
  {
    nome: "Fernanda Reis",
    email: "fpr.arquitetura.design@gmail.com",
    dataInscricao: new Date(2024, 1, 2, 19, 23),
    dataCheckIn: new Date(2024, 1, 5, 20, 20)
  },
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 0, 10, 15, 45),
    dataCheckIn: new Date(2024, 0, 11, 9, 30)
  },
  {
    nome: "Maria Souza",
    email: "maria@gmail.com",
    dataInscricao: new Date(2023, 3, 20, 12, 0),
    dataCheckIn: new Date(2023, 3, 21, 10, 15)
  },
  {
    nome: "Carlos Oliveira",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2023, 4, 5, 16, 30),
    dataCheckIn: new Date(2023, 4, 6, 14, 0)
  },
  {
    nome: "Ana Santos",
    email: "ana@gmail.com",
    dataInscricao: new Date(2023, 6, 15, 8, 0),
    dataCheckIn: new Date(2023, 6, 15, 12, 30)
  },
  {
    nome: "Pedro Lima",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 8, 25, 10, 30),
    dataCheckIn: new Date(2023, 8, 25, 14, 45)
  },
  {
    nome: "Mariana Costa",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2023, 10, 3, 18, 15),
    dataCheckIn: new Date(2023, 10, 4, 9, 0)
  },
  {
    nome: "Rafaela Sousa",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2023, 7, 8, 14, 0),
    dataCheckIn: new Date(2023, 7, 9, 11, 30)
  },
  {
    nome: "Gabriel Santos",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2023, 9, 12, 20, 0),
    dataCheckIn: new Date(2023, 9, 13, 16, 45)
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
      </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
    `
}

const atualizarLista = (participante) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  document
  .querySelector ('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new formData(event.target)

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null 
  }

  //verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => {
      return p.email == participante.email
    }
  )

  if(participanteExiste) {
    alert('E-mail já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulário
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o chekin
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if (confirm(mensagemConfirmacao) == false) {
    return
  }
  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  // atualizar o checking do participante
  participante.dataCheckIn = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}