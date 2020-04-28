import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button/PrimaryButton'

import backgroundImage from '../../../assets/images/banner-photo.jpg'

const Wrapper = styled.section`
  padding: 107px 0;
  background: url(${backgroundImage});
  background-position: center center;
  background-size: cover;
`

const StyledContainer = styled(Container)`
&&{
  grid-template-areas:
    "Heading Heading Heading Heading Heading Heading Heading . . . . ."
    "SubHeading SubHeading SubHeading SubHeading SubHeading SubHeading SubHeading . . . . ."
    "Button Button Button . . . . . . . . .";
}
`

const Heading = styled.h1`
  text-transform: uppercase;
  color: white;
  grid-area: Heading;

  margin-bottom: 26px;
`

const SubHeading = styled.p`
  grid-area: SubHeading;
  color: white;
  margin-bottom: 33px;
`

const StyledButton = styled(Button)`
  grid-area: Button;
`

export default function FirstBlock () {
  return (
    <Wrapper>
      <StyledContainer>
        <Heading>
          Test Assignment <br /> for frontend <br /> developer position
        </Heading>
        <SubHeading>
          We kindly remind you that your test assignment should be submitted <br />
          as a link to github/bitbucket repository. Please be patient, we consider <br />
          and respond to every application that meets minimum requirements. <br />
          We look forward to your submission. Good luck! The photo has to scale <br />
          in the banner area on the different screens
        </SubHeading>
        <StyledButton title='Sign up now' />
      </StyledContainer>
    </Wrapper>
  )
}
