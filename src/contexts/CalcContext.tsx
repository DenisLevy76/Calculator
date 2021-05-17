import React, { createContext, useCallback, useState } from 'react'

interface CalcContextData{
  inputValue: string;
  result: string;
  changeInputValue: (value: string) => void;
  calcExpression: (expression: string) => void;
}

export const CreateCalcContext = createContext({} as CalcContextData)

export const CalcContextProvider: React.FC = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const changeInputValue = useCallback((value: string) => {
    console.log('test')
    setInputValue(value)
  }, [])

  function calcExpression (expression: string) {
    setResult(expression)
  }

  return (
    <CreateCalcContext.Provider value={{
      inputValue,
      result,
      changeInputValue,
      calcExpression
    }}>
      {children}
    </CreateCalcContext.Provider>
  )
}
