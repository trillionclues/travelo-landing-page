import React from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <FooterSection>
      <span>Copyright &copy; 2022 Travelo. All rights reserved</span>
      <ul className='links'>
        <li>
          <a href='#hero'>Home</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#recommend'>Recommend</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
      </ul>

      <ul className='social_links'>
        <li>
          {' '}
          <BsFacebook />{' '}
        </li>
        <li>
          <BsLinkedin />
        </li>
        <li>
          <AiFillInstagram />
        </li>
      </ul>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #d0d8ff;
  padding: 2rem;
  border-radius: 0.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .links {
      display: flex;
      margin-left: -6rem;
      li {
        margin: -0.3rem 0;
      }
    }
    .social_links {
      flex-direction: row;
    }
  }
`
