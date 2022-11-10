import React from 'react'
import styled from 'styled-components'
const Container =styled.div`
    width: 100%;
    background-color: teal;
    color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
      Super Deal ! Free Shipping On Order Over 500rs.
    </Container>
  )
}

export default Announcement
