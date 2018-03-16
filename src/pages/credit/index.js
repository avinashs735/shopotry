import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"

const CREDIT = ({location,data }) => {
  if (location.pathname === withPrefix ("/credit/") || location.pathname === withPrefix ("/credit") ){
    //   require("./campusleader.css")
      
      
  }
      else{
          console.log("fail")
      }

return (

    <div className="home-content">
        <p>THis is credit page </p>
        </div>

)
}
 export default CREDIT     