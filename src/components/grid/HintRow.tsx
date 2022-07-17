import { unicodeSplit } from '../../lib/words'
import { Cell } from './Cell'

type Props = {
  solution: string
}

const cellsToRevealArr = [[], [], [], [0], [0],
                        [0, 4], [0, 5], [0, 6], [0, 7],
                        [0, 4, 8], [0, 4, 9], [0, 5, 10], [0, 5, 11],
                        [0, 4, 8, 12], [0, 4, 9, 13], [0, 5, 9, 14], [0, 5, 10, 15],
                        [0, 4, 8, 12, 16], [0, 4, 8, 13, 17], [0, 4, 9, 14, 18], [0, 4, 9, 14, 19]]

export const HintRow = ({ solution }: Props) => {
  const emptyCells = Array.from(Array(solution.length))
  
  const cellsToReveal = cellsToRevealArr[solution.length]
  const splitSolution = unicodeSplit(solution)

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => {
        const isRevealingCell = cellsToReveal.includes(i)
        const value = isRevealingCell ? splitSolution[i] : ""
        const status = isRevealingCell ? 'correct' : undefined
        const isCompleted = isRevealingCell ? true: undefined

        return (
          <Cell
            key={i}
            value={value}
            status={status}
            isCompleted={isCompleted}
          />
        )
      })}
    </div>
  )
}

export const getHintWord = (solution: string) => {
  const cellsToReveal = cellsToRevealArr[solution.length]
  const splitSolution = unicodeSplit(solution)

  return splitSolution.map((c, i) => {
    const isRevealingChar = cellsToReveal.includes(i)
    return isRevealingChar ? splitSolution[i] : " "
  })
  .join('')
}
