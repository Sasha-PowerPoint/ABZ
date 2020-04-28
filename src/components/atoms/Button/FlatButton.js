import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  width: 100%;
  padding: 8px 10px;
  transition: 0.2s;
  position: relative;
  text-align: center;
  white-space: nowrap;
  color: #ef5b4c

  &:hover {
    cursor: pointer;
    color: #d24335;
  }
`

export default function FlatButton ({ title, ...rest }) {
  return (
    <StyledButton {...rest}>
      {title}
    </StyledButton>
  )
}
