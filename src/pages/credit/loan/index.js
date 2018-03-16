import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

import { withPrefix } from "gatsby-link"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/animate.min.css';

const LOAN = ({location,data }) => {
  if (location.pathname === withPrefix ("/credit/loan/") || location.pathname === withPrefix ("/credit/loan") ){
      require("./style.css")
      require("./demo.css")
  }
      else{
          console.log("fail")
      }

     return(
         <div className="home-content">
        ajfasjfjakfagfsagfkgk

<img src="/redcarpetcom/logo.png" class="animated bounce" />
<div className="avinash">
    <img src="/redcarpetcom/logo.png" class="animated bounce" />
</div>

           </div> 






     );

    };

export default LOAN  

