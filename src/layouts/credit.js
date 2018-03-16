import React from 'react'
import Link from 'gatsby-link'
import CreditHeader from '../components/CreditHeader'
import CreditFooter from '../components/CreditFooter'


export default ({ children }) =>
 <div>
    <CreditHeader/>
      {children()}
    <CreditFooter/>
  </div>
