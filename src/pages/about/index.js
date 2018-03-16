import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"
import {Helmet} from "react-helmet";


const ABOUT = ({location,data }) => {
  if (location.pathname === withPrefix ("/about/") || location.pathname === withPrefix ("/about") ){
      require("./about.css")
  }
      else{
          console.log("fail")
      }

     return(
        <div className="home-content">
            <Helmet>
                <title>About</title>
              </Helmet>  
    <section id="banner">
       <div id="mainBanner" className="">
      <img className="bannerImage" src="/redcarpetcom/about/banner.svg" alt="RedCarpetUp Banner"/>
     </div>
   <div className="overlayContent">
         <div className="bannerText hidden-xs">
       <p>{ data.allAboutYaml.edges[0].node.bannerText}</p>
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
                  <h3>{data.allAboutYaml.edges[1].node.heading}</h3>
                  <div className="text">
                    <p>{data.allAboutYaml.edges[1].node.text}</p>
                  </div>

                </div>
    </section>

     <section className="team" >
          <div className="imageGallery team" >
            <div className="gallery" >
              <h3><strong>{data.allAboutYaml.edges[2].node.heading}</strong></h3><br/>
                 {data.allAboutYaml.edges[2].node.teams.map((team, i) =>
                <div id="f1_container" >
                <div id="f1_card" class="shadow">
                <div class="front face">
                  <img className="teamImages" src={"/redcarpetcom/team/" + team.image}/></div>
                  <div class="back face center">
                    <br/>
    <p>{team.name}</p>
    <p><a href={team.link}><i class="fa fa-linkedin"> </i></a> <a href={team.twit}><i class="fa fa-twitter"></i></a> <a href={team.git}><i class="fa fa-github"></i></a></p>
    <p>{team.job}</p>
  </div></div></div>
                )}
          </div>
        </div>



      </section>
    
      <section className="importantPeople">
          <div className="imageGallery" >
                  <div className="gallery" >
                      <h3><strong>{data.allAboutYaml.edges[3].node.heading}</strong></h3>
                      <div className="impimages gurus" >
                      {data.allAboutYaml.edges[3].node.gurus.map((guru, i) =>
                       <div> <img className="guruImages" src={"/redcarpetcom/team/angels/" + guru.image}/>
                      
                      <div className="caption">
                            <h3>{guru.name}</h3>
                            <h4>{guru.job}</h4>
                            <br/>
                        </div></div>)}
                        </div>
                      <h3><strong>{data.allAboutYaml.edges[4].node.heading}</strong></h3>
                      
                      <div className="impimages investors" style={{}}>
                      {data.allAboutYaml.edges[4].node.member.map((mem, i) =>
                       <div className="member"> 
                         <img className="guruImages" src={"/redcarpetcom/team/angels/" + mem.image}/>
                      
                      <div className="caption">
                            <h4>{mem.name}</h4>
                            <h5>{mem.job}</h5>
                            <br/>
                        </div></div>)}
                        
                        </div>
                        <h3><strong>{data.allAboutYaml.edges[5].node.heading}</strong></h3><br/>
                        
                        <div className="impimages ventures" >
                      {data.allAboutYaml.edges[5].node.member.map((mem, i) =>
                       <div  style={{}}> 
                         <img className="ventureImages" src={"/redcarpetcom/team/angels/" + mem.image} />
                      
                      </div>)}
                        
                        </div>
                  </div>
               </div>   
      </section>
         

        </div>
    )

}
export default ABOUT 

export const query = graphql`
query aboutQuery{
    allAboutYaml{
      edges{
        node{
          bannerText
          text
          heading
          teams{
            image
            name
            job
            link
            twit
            git
          }
          gurus{
            image
            name
            job
          }
          member{
            image
            name
            job
          }
        }
      }
    }
  }
`