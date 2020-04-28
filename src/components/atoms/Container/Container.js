import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
      width: 1024px;
      padding: 0 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 0px 30px;
      grid-template-areas: ". . . . . . . . . . . .";
  }
`

export default function Container ({ children, className }) {
  return (
    <StyledContainer>
      <div className={cx('container', className)}>
        {children}
      </div>
    </StyledContainer>
  )
}
