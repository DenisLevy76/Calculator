import React from 'react'

import { CalcContextProvider } from './CalcContext'

const AppProvider: React.FC = ({ children }) => {
  return (
    <CalcContextProvider>
      {children}
    </CalcContextProvider>
  )
}

export default AppProvider
