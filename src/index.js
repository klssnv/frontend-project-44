import readlineSync from 'readline-sync'

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(game.description)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = game.generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
