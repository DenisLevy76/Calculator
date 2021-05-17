import React, { useContext } from 'react'
import { CreateCalcContext } from '../../contexts/CalcContext'
import { Button, Container } from './styles'

// import { Container } from './styles';

const ButtonsGrid: React.FC = () => {
  const { changeInputValue, clearValues, inputValue } = useContext(CreateCalcContext)
  return (
    <>
      <Container>
        <Button onClick={clearValues}>C</Button>
        <Button onClick={() => changeInputValue(inputValue + '%')}>%</Button>
        <Button onClick={() => changeInputValue(inputValue.substr(0, inputValue.length - 1))}>apagar</Button>
        <Button onClick={() => changeInputValue(inputValue + '/')} color={'#bd93f9'}>/</Button>

        <Button onClick={() => changeInputValue(inputValue + '7')}>7</Button>
        <Button onClick={() => changeInputValue(inputValue + '8')}>8</Button>
        <Button onClick={() => changeInputValue(inputValue + '9')}>9</Button>
        <Button onClick={() => changeInputValue(inputValue + '*')} color={'#bd93f9'}>x</Button>

        <Button onClick={() => changeInputValue(inputValue + '4')}>4</Button>
        <Button onClick={() => changeInputValue(inputValue + '5')}>5</Button>
        <Button onClick={() => changeInputValue(inputValue + '6')}>6</Button>
        <Button onClick={() => changeInputValue(inputValue + '-')} color={'#bd93f9'}>-</Button>

        <Button onClick={() => changeInputValue(inputValue + '1')}>1</Button>
        <Button onClick={() => changeInputValue(inputValue + '2')}>2</Button>
        <Button onClick={() => changeInputValue(inputValue + '3')}>3</Button>
        <Button onClick={() => changeInputValue(inputValue + '+')} color={'#bd93f9'}>+</Button>

        <Button onClick={() => changeInputValue(inputValue + '0')}>0</Button>
        <Button onClick={() => changeInputValue(inputValue + '.')}>.</Button>
        <Button onClick={() => changeInputValue(inputValue + '()')}>()</Button>
        <Button style={{ backgroundColor: '#bd93f9' }}>=</Button>
      </Container>
    </>
  )
}

export default ButtonsGrid
