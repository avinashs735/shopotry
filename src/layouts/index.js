import React from 'react'
import Link from 'gatsby-link'

import './index.css'
import NavHead from '../components/NavHead'
import Footer from '../components/Footer'

export default ({ children }) =>
 <div>
    <NavHead/>
      <div style={{paddingTop:'101px'}}> {children()}</div>
     <Footer/>
  
  </div>
