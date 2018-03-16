import React from 'react'
import Link from 'gatsby-link'

import './style.css'

class CreditHeader extends React.PureComponent{
    render(){
        
    return(
      <div>
        
        <div className="mainNav">
             <nav className="navbar navbar-light">
       <div className="container-fluid" id="mainNav" >
        <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <Link className="navbar-brand" to='/'><img className="logo"
                src='/redcarpetcom/logo-redcarpet.svg'
                /></Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <Link to='/about/'>ABOUT US</Link>
        <Link to='/campus-leaders/'>CARDS</Link>
        <Link to='credit/campus_ambassador/'>CAREERS</Link>
        <Link to='/location/'>CONTACT US</Link>
        <Link to='/blog'>BLOG</Link>
            
      </ul>
 
    </div>
  </div>
</nav>
     
</div>

        </div>
        


    )
}
}

export default CreditHeader
