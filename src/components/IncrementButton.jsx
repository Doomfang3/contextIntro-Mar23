import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

const IncrementButton = () => {
  const { increment } = useContext(CountContext)

  return (
    <button type='button' onClick={increment}>
      +
    </button>
  )
}

export default IncrementButton
