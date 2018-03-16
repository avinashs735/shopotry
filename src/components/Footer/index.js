import React from "react"
import Link from  'gatsby-link'

// import './style.css'


class Footer extends React.PureComponent{
    render(){
        const { data } =this.props
        return(
        <div className="footer">
            <div className="container-fluid footerContainer">
               <div className="row">
                 <div className="col-xs-12">
                     <div className="footer-product">
                      <p>A YCombinator Summer 2015 Startup</p>
                      </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-xs-12">
                   <ul id="footer-links" className="list-unstyled list-inline">
                  
                     <li><Link className="page-link" to='/'>ABOUT</Link></li>
                     <li><Link className="page-link" to='/'>CAMPUS LEADERS</Link></li>
                     <li><Link className="page-link" to='/'>FAQS</Link></li>
                     <li><Link className="page-link" to='/'>JOBS</Link></li>
                     <li><Link className="page-link" to='/'>LEGAL</Link></li>
                     <li><Link className="page-link" to='/'>CONTACT</Link></li>
                     <li><Link className="page-link" to='/'>BLOG</Link></li>
                   
                     </ul>
                   <ul className="social">
                      <li><Link className="socialIcon" to='https://twitter.com/RedCarpetUp'><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                      <li><Link className="socialIcon" to='https://www.facebook.com/redcarpetup'><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                      <li><Link className="socialIcon" to='https://www.instagram.com/redcarpetup/'><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    </ul>  
                    <p className="company-name">&copy; RedCarpet Tech Pvt Ltd.</p>
                    </div>
                  </div>   
                </div>
              </div>
        )
    }
}
export default Footer