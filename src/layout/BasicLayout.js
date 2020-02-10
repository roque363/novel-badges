import React from 'react'
// Components
import Navbar from '../components/Navbar/Navbar'

function BasicLayout(props) {
  return (
    <React.Fragment>
      <Navbar/>
      {props.children}
    </React.Fragment>
  )
}

export default BasicLayout
