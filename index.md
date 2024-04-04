fronteditor.dev/nlw-unite
#HTML
*Hypertext*
*Markup*
- tags
- atributos
*Lenguage*

#CSS
*Cascade*
*Style*
*Sheet*
#JavaScripit
- variaveis
constantes que ao escrever a palavra serao ativadas
- tipos de dados
---number (somas ou multiplicações)
---string (frases)
- funcao
voce cria uma palavra q tem um codigo enorme escondido, ai ele vai automaticamente, não precisa digitar o codigo td. Ele coloca o () do lado e ali coloca o que vai aparecer na tela ao executar o codigo (mas isso não é em todos)

///objeto JavaScripit
const participante = {
  nome: "Fernanda Reis",
  email: "fpr.arquitetura.design@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

/// array
let participantes = [
    {
    nome: "Fernanda Reis",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 1, 2, 19, 23),
    dataCheckIn: new Date(2024, 1, 5, 20, 20)
  },
]

 for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
    // faça algo aqui, repetindo enquanto ainda tiver gente na lista
 }