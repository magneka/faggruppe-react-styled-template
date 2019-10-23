import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import MainMenu from './components/Menus/mainMenu';
import LorumDemo from './pages/lorumDemo';

import styled from 'styled-components'

const RootDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`

const AppRootComponent = props => {

  return (
    <RootDiv>
      <MainMenu></MainMenu>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LorumDemo} />
          </Switch>
        </Router>
      </div>
    </RootDiv>
  )
}

export default AppRootComponent