import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'


import './style.css'


export default ({ data }) =>{
    return(
        <div className="home-content">
        <Helmet>
          <title>Society</title>
        </Helmet>     
  <section id="banner">
   <div id="mainBanner" className="">
    <img className="bannerImage" src="/redcarpetcom/society/images/banner.PNG" alt="RedCarpetUp Banner"/>
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

  <section class="sponsoring">
          <div class="textContainer welcomeheading">
            <h3>
            <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.welcomeheading}}></div>

            </h3>
            </div>
            <div class="textContainer sponsorheading">
              <h3>
              <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.sponsorheading}}></div>
              </h3>
              </div>
            <div class="row">
             <div class="socializetext sponsortext">
                <p>
                <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.text}}></div>
                    </p>
            </div>
        </div>
        <div class="textContainer eventtext">
          <h3>
          <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.eventtext}}></div>
          </h3>
          </div>
      </section>

      <section class="eligible">
            <div class="eligibleheading">
                <div class="row">
                    <p class="eligiblehead">
                 <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.eligible.head}}></div>
                 </p>
                  </div>
            </div>
            <div class="eligiblepoints">
                <ul class="apppoints">
                   <li class="subpoints">
                   
                   <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.eligible.points.one}}></div>
                    </li>
                    <li class="subpoints">
                    <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.eligible.points.two}}></div>
                    </li>
                </ul> 
            </div>
            <div class="minsponsorship">
            <div class="row">
              <p class="minsponsor">
              <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.eligible.minsponsor}}></div>
              </p>
                  </div>
                <div class="row">
                <p class="note">
                <div dangerouslySetInnerHTML={{ __html :data. allSocietyYaml.edges[0].node.eligible.note}}></div>
                </p>
                  </div>
                  </div>
           </section>




  </div>


    )

}


export const query = graphql`
query SocietyQuery{
    allSocietyYaml{
      edges{
        node{
          welcomeheading
          sponsorheading
          text
          eventtext
          eligible {
            head
            minsponsor
            note
            points{
              one
              two
            }
          }
          query
          formheading
        }
      }
    }
  }
  `