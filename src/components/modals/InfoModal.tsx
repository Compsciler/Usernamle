import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose} isWide={true}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the username in 10 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the username.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You may input any sequence of characters for each guess.
        Playing on PC is recommended.
      </p>
      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Some of the characters in the username will be revealed as a clue.
        The username comes from one of the 10,000 users by comment count on Reddit (as of November 2017).
        Hyphens in the username are replaced by underscores.
      </p>
      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Example guesses as usernames from the top 100:
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="correct"
        />
        <Cell value="U" />
        <Cell value="T" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character M is in the username and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="E" />
        <Cell value="S" />
        <Cell value="S" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="_"
          status="present"
        />
        <Cell value="T" />
        <Cell value="H" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="_"
          status="present"
        />
        <Cell value="T" />
        <Cell value="H" />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        There are at least two underscores in the username,
        and both of the ones in the guess are in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="I" />
        <Cell value="L" />
        <Cell value="V" />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="L" />
        <Cell value="I" />
        <Cell value="G" />
        <Cell value="H" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="4" status="absent" />
        <Cell value="2" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character 4 is not in the username in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/Compsciler/Usernamle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
