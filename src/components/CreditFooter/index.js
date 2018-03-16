import React from 'react'
import Link from 'gatsby-link'

import './style.css'

class CreditFooter extends React.PureComponent{
    render(){
        
    return(
        <div className="footer">
            <footer className="text-center">
            <div className="footer-above" style={{backgroundColor: "#44276c"}}>
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-6">
                            <h4>LOcation</h4>
                            <p style={{color:"white"}}>Second Floor, Plot A, Khasra 360,<br/>Near Indian Bank,Behind Centrum Mall,<br/> 
                            Sultanpur Metro Station -110030
                            </p>
                            </div>
                        <div className="footer-col col-md-6">
                            <h4>Around The Web</h4>
                            <ul className="list-inline">
                                <li>
                                <a href="https://www.facebook.com/redcarpetup" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                                    </li>
                                    <li>
                                <a href="https://twitter.com/RedCarpetUp" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                             <li>
                                <a href="https://instagram.com/RedCarpetUp" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i></a>
                            </li>   
                            </ul>
                        </div> 
                            </div>
                        </div>
                    </div>
                    <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        Copyright &copy; RedCarpet Tech Pvt Ltd.
                    </div>
                    <div class="col-lg-4">
                       <a href="/faq/" style={{color:"white"}}>FAQ</a>
                    </div>
                    <div class="col-lg-4">
                       <a href="/legal/" style={{color:"white"}}>LEGAL</a>
                    </div>
                </div>
            </div>
        </div>
                </footer>
        </div>
    )
}
}
export default CreditFooter