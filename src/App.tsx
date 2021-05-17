import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'

import { Display } from './components/Display'
import ButtonsGrid from './components/ButtonsGrid'
import { Container } from './styles/appStyles'
import AppProvider from './contexts/appProvider'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <AppProvider>
      <Container>
        <GlobalStyle />
        <Display />
        <ButtonsGrid/>
      </Container>
    </AppProvider>
  )
}

render(<App />, mainElement)
