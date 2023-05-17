import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'
import { LocaleContext } from '../contexts/LocaleContext'

const DisplayCount = () => {
  const { count } = useContext(CountContext)
  const { locale } = useContext(LocaleContext)

  return (
    <h1>
      {count} in {locale}
    </h1>
  )
}

export default DisplayCount
