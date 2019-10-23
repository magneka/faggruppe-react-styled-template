import React from 'react'
import styled from 'styled-components'

const HouseIcon = styled.i`
  font-family: 'FontAwesome'; 
  font-size: 50px; 
`

const LorumDemo = () => 
  <div>
    <HouseIcon className="fa fa-home"></HouseIcon>
    <h1>Lets pretend this is the home page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
      </p>   
  </div>

export default LorumDemo