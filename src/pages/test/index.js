import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"

const IndexLayout = ({location }) => {
    if (location.pathname === withPrefix ("/test")){
        require("./test.css")
    }
        else{
            console.log("fail")
        }

  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};


export default IndexLayout