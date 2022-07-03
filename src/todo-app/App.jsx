import React from 'react'
import Todos from './components/Todos'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: rgba(0,0,0, 0.6);
  min-height: 100vh;
  height: auto;
  nav {
    width: 100%;
    height: 60px;
    display: flex;
    background-color: rgba(0,0,0, 0.8);
    color: white;
    font-size: 32px;
    justify-content: center;
    align-items: center;
  }
`

const App = () => {
  return (
    <Container>
      <nav>
        React Redux Toolkit Todo list
      </nav>
        <Todos />
    </Container>
  )
}

export default App