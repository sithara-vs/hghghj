import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const LoggedOut = (props) => {

  return (
    <Container className='logged-out'>
      <p className='logged-out-msg'>You have been successfully logged out</p>
      <Link
        className='link'
        to={'/'}>
        <p>Return Home</p>
      </Link>
    </Container>
  )
}

export default withRouter(LoggedOut)