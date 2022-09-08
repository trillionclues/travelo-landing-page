import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false)

  // set scrollstate image to true when pageY scroll > 200
  window.addEventListener('scroll', () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false)
  })

  // window scroll-to-top functionality
  const toTopPage = () => {
    window.scroll({ top: 0 })
  }

  return (
    <ToTop scrollState={scrollState} onClick={toTopPage}>
      <img src={logo} alt='' />
    </ToTop>
  )
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? 'block' : 'none')};
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;

  img {
    height: 1.5rem;
  }
  padding: 1rem;
  border-radius: 2rem;
  background-color: #1900ff39;
`
