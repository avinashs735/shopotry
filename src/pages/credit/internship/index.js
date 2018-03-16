import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

import './style.css'

export default ({ data }) =>{

    return(
        <div className="home-content">
        <div className="intro blues-section clearfix">
        <div className="container">
            <br/>
             <h2 align="center" style={{color:"white", fontFamily:"Montserrat"}}>
             <div   dangerouslySetInnerHTML={{ __html: data. allInternshipYaml.edges[0].node.bannerHeading}}>
            </div>
             </h2>
            <img src="/redcarpetcom/internship/images/mountain.png" className="img"/>

   <h3 align="center" style={{color:"white", fontFamily:"Montserrat"}}>
   <div dangerouslySetInnerHTML={{ __html: data. allInternshipYaml.edges[0].node.bannerSubHeading}}>
            </div></h3>
   <br/>
    <div align="center">   <a className="btn" target="_blank" href="https://goo.gl/forms/HygHsXuAUbC5zHrN2" id="breathing-button">  <div dangerouslySetInnerHTML={{ __html: data. allInternshipYaml.edges[0].node.bannerButton}}>
            </div></a></div>
            </div>
        </div>

        <div className="intro orange-section clearfix" id="about">
        <div className="container">


            <div className="row">

                <div className="col-md-8 story" style={{marginBottom:"30px"}}>
                    <h1 className="iss">
                    <div dangerouslySetInnerHTML={{ __html: data. allInternshipYaml.edges[0].node.firstheadline}}>
            </div>
                    </h1>
                  <p><div dangerouslySetInnerHTML={{ __html: data. allInternshipYaml.edges[0].node.text}}>
            </div>
            </p>
            

                </div>

                <div className="col-md-4">
                    <img src="/redcarpetcom/internship/images/student.png" className="ims"/>
                </div>

            </div>
        </div>
    </div>

    <div className="intro green-section clearfix" id="reward">
        <div className="container">


            <div className="row">

                <div className="col-lg-4">

                    <img src="/redcarpetcom/internship/images/steps.png" className="ims"/>
                </div>
                <div className="col-md-8 col-lg-8 story" style={{marginBottom:"30px",marginLeft:"0px"}}>
                    <h1 style={{color:"white"}}>
                    <div dangerouslySetInnerHTML={{ __html: data.allInternshipYaml.edges[0].node.process}}>
            </div>
                    </h1>

                    <ul style={{color:"white"}}>
            {data.allInternshipYaml.edges[0].node.processContent.map((process, i) =>
        <div>
        <h3 style={{color:"white"}} className="subhe">
            <div dangerouslySetInnerHTML={{ __html: process.heading}}>
            </div>
        </h3>
        <p style={{color:"white"}}>
        <div dangerouslySetInnerHTML={{ __html: process.text}}>
        </div>
        </p>
        </div>
            )}
          
        </ul>
</div>
</div>
</div>

            </div>
        </div>

    )
}
export const query = graphql`
query internship{
  allInternshipYaml{
    edges{
      node{
        bannerButton
        bannerHeading
        bannerSubHeading
        firstheadline
        text
        process
        processContent{
          heading
          text
        }
      }
    }
  }
}
  `