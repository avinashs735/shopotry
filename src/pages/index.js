import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

export default ({ data }) =>{
 
  return(
    <div className="home-content">
                  <Helmet>
                    <title>Home</title>
                  </Helmet>     
            <section id="banner">
             <div id="mainBanner" className="">
              <img className="bannerImage" src="/redcarpetcom/home/BannerImage.svg" alt="RedCarpetUp Banner"/>
              </div>
              <div className="overlayContent">
               <div className="bannerText hidden-xs">
                  <p>{data.allHomeYaml.edges[0].node.bannerText}</p>
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

            <section id="work">
             <div className="work">
             <div className="heading">
              <h3>{data.allHomeYaml.edges[1].node.heading}</h3>
              </div>
               <div className="container">
                <div className="row">
                 <div className="stepContainer visible-xs">
                 <ul>
                    {data.allHomeYaml.edges[1].node.works.map((work, i) =>
                  <div className="col-xs-6 col-xs-offset-3">
                  <li className="elementContainer">
                     <img  className="imageContainer" src={"/redcarpetcom/home/" + work.image}/> 
                    <p className="caption"> {work.caption} </p>
                  </li>
                </div>
                )}   
               </ul>  
             </div>
            </div>
           </div>
           <div className="stepContainer hidden-xs">
            <ul>
              {data.allHomeYaml.edges[1].node.works.map((work, i) =>
              <li className="elementContainer">
                <img  className="imageContainer" src={"/redcarpetcom/home/" + work.image}/>
                <p className="caption">{work.caption}</p>
              </li>
               )}            
            </ul>
          </div> 
        </div>
           
               <div id="safeSection">
                  <h3>{data.allHomeYaml.edges[2].node.heading}</h3>
                 <div className="container-fluid">
                 {data.allHomeYaml.edges[2].node.safe.map((safe, i) =>
                   <div className="row">
                   <ul className="textListContainer">
                        <li>
                          <h5>{safe.head}</h5>
                          <p>{safe.text}</p>
                          </li>
                        </ul>
                    </div>
                   )} 
                
                 </div> 


               </div>
      </section>
           
            <section id="services">
                 <h3>{data.allHomeYaml.edges[3].node.heading}</h3>
                <div className="hidden-xs">
                 <ul className="listOfServices">
                 {data.allHomeYaml.edges[3].node.service.map((service, i) =>
                    <li className="listElementContainer">
                      <img className="imageContainer" src={"/redcarpetcom/home/" + service.icon} />
                      <p className="caption" style={{ fontSize: "14px" }}> {service.icontext} </p>   
                    </li>   
                    )} 
                  </ul>
                 </div> 

                 <div id="myCarousel" className="carousel slide visible-xs" data-ride="carousel">

                     <div className="carousel-inner">

           
              <div className="item active">
                <img src="" className="imageContainer"/>
                <div className="carousel-caption">
                  <h3 className="caption" style={{ fontSize: "14px" }}></h3>
                </div>
              </div>
           
              <div className="item">
                <img src="" className="imageContainer"/>
                <div className="carousel-caption">
                  <h3 className="caption" style={{ fontSize: "14px" }}></h3>
                </div>
              </div>
            </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <i className="fa fa-chevron-left carControl" aria-hidden="true"></i>
          <span className="sr-only">Previous</span>
        </a>

        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <i className="fa fa-chevron-right carControl" aria-hidden="true"></i>
          <span className="sr-only">Next</span>
        </a>

              </div>
            </section>

            <section id="whiteSection" className="whiteSection"> 
               <h3>{data.allHomeYaml.edges[4].node.heading}</h3>
                <div>
                  <ul className="brandLogos">
                  {data.allHomeYaml.edges[4].node.white.map((white, i) =>
                    <li className="logoContainer">
                       <img className="imageContainer"  src={"/redcarpetcom/home/" + white.logo}  />
                    </li>
                      )}
                  </ul>
                 </div>
                </section>        


        
    </div>

  )
 
}

export const query = graphql`
query HomeContentQuery {
  allHomeYaml {
    edges {
      node {
        bannerText
        heading
        safe{
          head
          text
        }
        works{
          caption
          image
        }
        service{
          icon
          icontext
        }
        white{
          logo
          logotext
        } 
       }
    }
  }
}
`