import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    padding: 0.9375rem;

    text-align: right;

    height: 100%;



    input{
      margin-top: 2.96rem;
      font-size: 2.5rem;
      background-color: transparent;
      border: none;
      outline: none;
      color: white;
      text-align: right;
    }
  `}
`
