import { getRandomInt } from '../utils.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

export const description = 'What number is missing in the progression?'

export const generateRound = () => {
  const length = getRandomInt(5, 10)
  const start = getRandomInt(1, 50)
  const step = getRandomInt(2, 10)

  const progression = generateProgression(start, step, length)

  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return { question, correctAnswer }
}

export const progressionGame = {
  description,
  generateRound,
}
