import React, { useContext } from 'react'
import { CreateCalcContext } from '../../contexts/CalcContext'
import { Container } from './styles'

export function Display (): JSX.Element {
  const { result, inputValue, changeInputValue } = useContext(CreateCalcContext)
  return (
    <Container>
      <p>{result}</p>
      <input type="text" name="calc" onChange={(e) => changeInputValue(e.target.value)} value={inputValue} id="calc" />
    </Container>
  )
}
