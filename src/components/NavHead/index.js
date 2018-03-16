import React from 'react'
import Link from 'gatsby-link'

 import './style.css'

class NavHead extends React.PureComponent{
    render(){
        
    return(
      <div style={{position:'fixed',width:'100%',height:'100px',position:'fixed',zIndex:1000,boxShadow:'0px 0px 5px #E0E1E1'}}>
        
        <div className="mainNav" style={{background: 'red'}}>
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
    <div className="collapse navbar-collapse" id="myNavbar"style={{marginTop:'15px',marginLeft:'200px'}}>
      <ul className="nav navbar-nav" >
        <Link to='/about/'>About</Link>
        <Link to='/campus-leaders/'>Campus Leaders</Link>
        <Link to='/location/'>Contact</Link>
        <Link to='/faq/'>FAQs</Link>
        <Link to='/jobs/'>Jobs</Link>
        <a href='http://www.faccha.com'>Shop</a>
        <Link to='/smart-card/'>Smart-Card</Link>
        <Link to='/blog/'>The RC Blog</Link>
        <Link to='/videos/'>Videos</Link>
        <Link to='#'><img className="logo-bar" src='/redcarpetcom/googleplay.svg' style={{width:'80px'}}/></Link>
            
      </ul>
 
    </div>
  </div>
</nav>
     
</div>

        </div>
        


    )
}
}

export default NavHead