import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'
import { withPrefix } from "gatsby-link"

const LEGAL = ({location,data }) => {
  if (location.pathname === withPrefix ("/legal/") || location.pathname === withPrefix ("/legal") ){
      require("./legal.css")
  }
      else{
          console.log("fail")
      }

     return(
        <div>

                <Helmet>
                    <title>Legal</title>
                  </Helmet>     
            <section id="banner">
             <div id="mainBanner" className="">
              <img className="bannerImage" src="/redcarpetcom/legal/banner.svg" alt="RedCarpetUp Banner"/>
              </div>
              <div className="overlayContent">
               <div className="bannerText hidden-xs">
                  {/* <p>{data.allHomeYaml.edges[0].node.bannerText}</p> */}
              </div>
               <div className="downloadIcons hidden-xs">
                <Link to='/https://goo.gl/qwgz5z/'  style={{ color: `white` }}> <img className="play" src="/redcarpetcom/googleplay.svg"/></Link>
                <Link to='#' style={{ color: `white` }}><img className="play" src="/redcarpetcom/appstore.svg"/></Link>
                </div>  
              </div>
              <div className="downloadIcons visible-xs">
                <Link to='/https://goo.gl/qwgz5z/' style={{ color: `white` }}> <img className="play" src="/redcarpetcom/googleplay.svg"/></Link>
                <Link to='#' style={{ color: `white` }}><img className="play" src="/redcarpetcom/appstore.svg"/></Link>
                </div>
                </section>
                  <section className="intro">
                  <div className="textContainer">
                <div   dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[1].node.html }}>

                    </div>

                <div
                dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} 
                >
                   
                    </div>
                    </div>
                    </section>
                
            </div>

    )
}  
export default LEGAL

export const query = graphql`
query Legal{
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order:ASC }
    ){
      edges{
        node{
          html
        }
      }
    }
  }
  `