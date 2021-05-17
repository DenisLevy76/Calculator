import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: calc(100vh - 140.36px);
  `}
`

export const Button = styled.button`
  ${({ color }) => css`
    color: ${color || 'white'};
    flex: 1;
    font-size: 1rem;
    background-color: var(--secundary-bg);
    border: none;
    border-top: 1px solid var(--border);
    outline: none;


    &:hover{
      cursor: pointer;
      filter: brightness(0.8);
    }
    &:active{
      filter: brightness(0.7);
    }
  `}
`
