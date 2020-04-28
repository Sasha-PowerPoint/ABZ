import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  width: 100%;
  padding: 8px 10px;
  color: ${props => props.disabled ? '#959494' : 'white'};
  border-radius: 4px;
  transition: 0.2s;
  position: relative;
  text-align: center;
  white-space: nowrap;
  background: ${props => props.disabled ? '#f9f9f3' : '#ef5b4c'}
  pointer-events: ${props => props.disabled ? 'none' : 'all'} 

  &:hover {
    cursor: pointer;
    background: #d24335;
  }
`

export default function PrimaryButton ({ title, ...rest }) {
  return (
    <StyledButton {...rest}>
      {title}
    </StyledButton>
  )
}
