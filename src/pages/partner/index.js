import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

export default ({ data }) =>{
    return(
             <div className="home-content">
                  <Helmet>
                    <title>Partner</title>
                  </Helmet>     
            <section id="banner">
             <div id="mainBanner" className="">
              <img className="bannerImage" src="/redcarpetcom/partner/images/banner.png" alt="RedCarpetUp Banner"/>
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

            <section className="sponsoring">
          <div className="textContainer welcomeheading">
            <h3>
            <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[0].node.heading}}></div>
            </h3>
            </div>
            <div className="textContainer sponsorheading">
              <h3>  <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[1].node.heading}}></div></h3>
              </div>
            <div className="row">
             <div className="socializetext sponsortext">
             <p>
             <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[1].node.text}}></div>
                </p>
            </div>

        </div>
        <div className="textContainer eventtext">
          <h3> <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[2].node.text}}></div></h3>
          </div>
      </section>

      <section className="eligible">
            <div className="eligibleheading">
                <div className="row">
                    <p className="eligiblehead">

                    <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[3].node.head}}></div>

                    </p>
                  </div>
            </div>
            <div className="eligiblepoints">
                <ul className="apppoints">
                   <li className="subpoints">  <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[3].node.one}}></div></li>
                    <li className="subpoints">
                    <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[3].node.two}}>
                    </div>
                    </li>
                </ul> 
            </div>
            <div className="minsponsorship">
            <div className="row">
              <p className="minsponsor">
              <div dangerouslySetInnerHTML={{ __html :data.allPartnerYaml.edges[4].node.heading}}>
                    </div>
              </p>
                  </div>
                  </div>
           </section>
           
           {/* <section className="form">
           </section> */}
     
           </div>
    )

}
export const query = graphql`
query Partrnerquery {
    allPartnerYaml{
      edges{
        node{
          heading
          text
          one
          two
        }
      }
    }
  }
`