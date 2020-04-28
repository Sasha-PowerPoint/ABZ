import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button/FlatButton'

import logo from '../../../assets/images/logo.svg'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`

const StyledContainer = styled(Container)`
&&{
  gap: 0 29px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.7fr 0.7fr 0.7fr 0.7fr 0.7fr;
  grid-template-areas: "Logo Logo . . . . . About_me Relationships Requirements Users Sign_up";
}
`

const NavButton = styled(Button)`
  font-size: 14px;
  padding-left: 0;
  padding-right: 0;

  grid-area: ${props => props.dataGridId};
  
`

const Logo = styled.img`
  grid-area: Logo;
  margin: auto auto;
`

export default function Header ({ children }) {
  return (
    <HeaderWrapper>
      <StyledContainer>
        {/* <HeaderContainer> */}
        <Logo src={logo} />

        {/* <NavigationBar> */}
        <NavButton title='About me' dataGridId='About_me' type='flat' />
        <NavButton title='Relationships' dataGridId='Relationships' type='flat' />
        <NavButton title='Requirements' dataGridId='Requirements' type='flat' />
        <NavButton title='Users' dataGridId='Users' type='flat' />
        <NavButton title='Sign up' dataGridId='Sign_up' type='flat' />
        {/* </NavigationBar> */}
        {/* </HeaderContainer> */}
      </StyledContainer>
    </HeaderWrapper>
  )
}
