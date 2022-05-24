import { Cell } from './Cell'

type Props = {
  solution: string
}

export const HintRow = ({ solution }: Props) => {
  const emptyCells = Array.from(Array(solution.length))
  const cellsToRevealArr = [[], [], [], [0], [0],
                        [0, 4], [0, 5], [0, 6], [0, 7],
                        [0, 4, 8], [0, 4, 9], [0, 5, 10], [0, 5, 11],
                        [0, 4, 8, 12], [0, 4, 9, 13], [0, 5, 9, 14], [0, 5, 10, 15],
                        [0, 4, 8, 12, 16], [0, 4, 8, 13, 17], [0, 4, 9, 14, 18], [0, 4, 9, 14, 19]]
  
  const cellsToReveal = cellsToRevealArr[solution.length]

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => {
        const isRevealingCell = cellsToReveal.includes(i)
        const value = isRevealingCell ? solution[i] : ""
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
