import React from 'react'
import NavLinks from './links'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
        <div>Logo</div>
        <div>
            <NavLinks/>
        </div>
    </div>
  )
}

export default Navbar