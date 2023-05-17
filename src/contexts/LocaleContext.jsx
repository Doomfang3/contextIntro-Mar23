import { createContext, useState } from 'react'

export const LocaleContext = createContext()

const LocaleContextProvider = ({ children }) => {
  const [locale, setLocale] = useState('en')

  return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>
}

export default LocaleContextProvider
