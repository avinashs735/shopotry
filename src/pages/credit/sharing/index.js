import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

import { withPrefix } from "gatsby-link"

const SHARING = ({location,data }) => {
  if (location.pathname === withPrefix ("/credit/sharing/") || location.pathname === withPrefix ("/credit/sharing") ){
      require("./sharing.css")
  }
      else{
          console.log("fail")
      }

     return(
         <div className="home-content">
        <div className="abce13" style={{backgroundColor:"#43b889"}}>
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                <h2 style={{fontFamily:"Montserrat", color:"white"}}>
                <div dangerouslySetInnerHTML={{ __html: data. allSharingYaml.edges[0].node.bannerHeading }}>
            </div>

                </h2>
                <br/><br/><br/>
                    <img className="img-responsive" src="/redcarpetcom/sharing/img/share.png"  alt="redcarpet"/>
                       <h3 align="center" style={{fontFamily:"Montserrat"}}>
                           <div dangerouslySetInnerHTML={{ __html: data. allSharingYaml.edges[0].node.bannerSubHeading}}>
                           </div> 
                           </h3>
                </div>
            </div>
            </div>
            </div>

            <div class="container">
 <h3 align="center" style={{fontFamily:"Montserrat"}}>
 <div dangerouslySetInnerHTML={{ __html: data.allSharingYaml.edges[0].node.section.heading}}>
 </div>
 </h3> 
 <hr class="star-primary"/>
<p>
<div dangerouslySetInnerHTML={{ __html: data.allSharingYaml.edges[0].node.section.content}}>
</div>
</p>

<h4 align="center">
<div dangerouslySetInnerHTML={{ __html: data.allSharingYaml.edges[0].node.section.subHeading}}>
</div>
</h4>
<ul>
{data.allSharingYaml.edges[0].node.section.list.map((lis, i) =>
    <div>
  <li><h4>{ lis.title }</h4></li>
  <p>{lis.text}</p>
  </div>
)}
</ul>
</div>

<section style={{backgroundColor:"#43b889"}} class="success" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>
                    <div dangerouslySetInnerHTML={{ __html: data.allSharingYaml.edges[0].node.aboutSection.heading }}>
                    </div>
                    </h2>
                    <hr class="star-light"/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-lg-offset-2">
                    <p><div dangerouslySetInnerHTML={{ __html: data.allSharingYaml.edges[0].node.aboutSection.leftPara }}>
                    </div>
                    </p>
                </div>
                <div class="col-lg-4">
                    <p>
                    <div dangerouslySetInnerHTML={{ __html: data.allSharingYaml.edges[0].node.aboutSection.rightPara }}></div>
                    </p>
                </div>
            </div>

        </div>
    </section>





           </div> 






     );

    };

export default SHARING   

export const query = graphql`
 query SharingQuery {
  allSharingYaml{
    edges{
      node{
        bannerHeading
        bannerSubHeading
        section{
          heading
          subHeading
          content
          list{
            title
            text
          }
        }
        aboutSection{
          heading
          leftPara
          rightPara
        }
      }
    }
  }
}
`