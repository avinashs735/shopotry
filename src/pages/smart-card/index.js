import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'
import { withPrefix } from "gatsby-link"
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

const SMARTCARD = ({location,data }) => {
  if (location.pathname === withPrefix ("/smart-card/") || location.pathname === withPrefix ("/smart-card") ){
      require("./smart-card.css")
  }
      else{
          console.log("fail")
      }

     return(

         <div className="home-contet">
           <Helmet>
                <title>Smart Card</title>
              </Helmet>
             <section id="banner">
                 <div id="mainBanner" className="">
                <img className="bannerImage" style={{width:`100%`,borderStyle:`none`}}src="/redcarpetcom/smart-card/Smart-Card-Banner.jpg" alt="RedCarpetUp Banner"/>
            </div>
        <div className="overlayContent">
          <div className="bannerText hidden-xs">
            <p></p>
            </div>
            <div className="downloadIcons hidden-xs">
              <br/><br/><br/>
       <Link to='/https://goo.gl/qwgz5z/'  style={{ color: `white` }}> <img className="play" src="/redcarpetcom/googleplay.svg"/></Link>
       <Link to='#' style={{ color: `white` }}><img className="play" src="/redcarpetcom/appstore.svg"/></Link>
       </div>  
     </div>
     <div className="downloadIcons visible-xs">
       <Link to='/https://goo.gl/qwgz5z/' style={{ color: `white` }}> <img className="play" src="/redcarpetcom/googleplay.svg"/></Link>
       <Link to='#' style={{ color: `white` }}><img className="play" src="/redcarpetcom/appstore.svg"/></Link>
       </div> 
          </section>
            
          <section className="intro card-intro">
            <div className="textContainer">
            <h3></h3> 
              <div className="text">
               <p>{data.allSmartCardYaml.edges[1].node.text}</p>
              </div>

              <div className="card">
                <img className="card" style={{marginLeft:`140px`}}src="/redcarpetcom/smart-card/card.jpg"/>
              </div>
                      <h3 class="greyHeading">{data.allSmartCardYaml.edges[2].node.points[0].moretextintro}</h3>
                 <h3 class="greyHeading cardprice"> {data.allSmartCardYaml.edges[2].node.points[1].price}</h3>
              <button type="button" className="btn  btn-outline-primary cardbutton" data-toggle="modal" data-target="#cardform"><div id="toptext">GET</div><div id="bottomtext">smartcard
                </div>  
                </button>
            </div>
        </section> 

                <section className="intro">
              <div className="textContainer">
                <h2 className="text-center"><br/>{data.allSmartCardYaml.edges[3].node.heading}</h2>
              </div>
              <div className="text">
                        <p>{data.allSmartCardYaml.edges[3].node.text}</p>
              </div>
              <ul className="featureList">
                  {data.allSmartCardYaml.edges[3].node.features.map((feature , i) =>
                          <li>
                            <div className="col-lg-4">
                                  <img src={"/redcarpetcom/smart-card/feature/"+ feature.image}/>
                            </div>
                            <div className="col-lg-8">
                              <h4>{feature.head}</h4>
                              <p>
                                {feature.text}
                              </p>
                            </div>

                          </li>
                          )}
              </ul>
        </section>

         <section class="intro grey">
              <div class="textContainer">
                <h3 class="text-center" style={{fontSize:`30px`}}><strong>{data.allSmartCardYaml.edges[4].node.heading}</strong></h3>
                <h3 class="greyHeading">{data.allSmartCardYaml.edges[4].node.text}</h3>
              </div>
              <ul class="featureList">
                    {data.allSmartCardYaml.edges[4].node.benefits.map((feature , i) =>
                          <li>
                            <div className="col-lg-4">
                                  <img src={"/redcarpetcom/smart-card/"+ feature.image}/>
                            </div>
                            <div className="col-lg-8">
                              <h4>{feature.heading}</h4>
                              <p>
                                {feature.text} &nbsp;<a href={feature.url}>[{feature.token}]</a>
                              </p>
                            </div>

                          </li>
                          )}
              </ul>
            </section>

 <section className="testimonialsvideo">
            <div className="row">
              <div className="text testimonialsheading">
                <h3>Why users love the RedCarpet app!</h3>
              </div>
            </div>
            <div className="row">
              <div className="intrinsic-container intrinsic-container-16x9">
                <iframe src="https://www.youtube.com/embed/HPA_QQ1Ojlk?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen/>
              </div>
            </div>
            <div class="video_listing">
                    <h2>Checkout our videos....</h2>
                    <div class="row">
                          <div class="col-md-12">
                            <div class="carousel slide multi-item-carousel" id="theCarousel">
                              <div class="carousel-inner">
                                <div class="item active">
                                  <div class="col-xs-4"><iframe src="https://www.youtube.com/embed/QQkFQUp-u8o?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen></iframe></div>
                                </div>
                                <div class="item">
                                  <div class="col-xs-4"><iframe src="https://www.youtube.com/embed/NBG3EsZBv2c?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen></iframe></div>
                                </div>
                                <div class="item ">
                                  <div class="col-xs-4"><iframe src="https://www.youtube.com/embed/kRe_c_3NXT8?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen></iframe></div>
                                </div>
                                <div class="item">
                                  <div class="col-xs-4"><iframe src="https://www.youtube.com/embed/XnyT7GOg-x4?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen></iframe></div>
                                </div>
                                <div class="item">
                                  <div class="col-xs-4"><iframe src="https://www.youtube.com/embed/iriKwp4Rukk?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen></iframe></div>
                                </div>
                                <div class="item">
                                  <div class="col-xs-4"><iframe src="https://www.youtube.com/embed/7gfUKFaA5yM?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen></iframe></div>
                                </div>
                              
                                 
                                <div class="item">
                                  <div class="col-xs-4"><iframe width="640" height="360" src="https://www.youtube.com/embed/zFguqx8Yc5w?list=PLuqSOE4c5C5KrsB9XdVX7Z66lsmUGCRpA" frameborder="0" gesture="media" allowfullscreen></iframe></div>
                                </div>
                                 
                                
                              </div>
                              <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
                              <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
                            </div>
                          </div>
                        </div>

              </div>

            
          </section>

          <section class="intro faqs">
          <h2 class="text-center">{data.allSmartCardYaml.edges[5].node.heading}</h2>
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            {data.allSmartCardYaml.edges[5].node.faqs.map((faq, i)=>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id={"" + faq.headingId }>
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={"#"+ faq.collapseId } aria-expanded="true" aria-controls={"" +  faq.collapseId}>
                      <p >{faq.question}</p>
                  </a>
                </h4>
              </div>
              <div id={""+ faq.collapseId} class="panel-collapse collapse" role="tabpanel" aria-labelledby={""+faq.headingId }>
                <div class="panel-body"> <p>{faq.answer}</p></div>
              </div>
            </div>
            )}
          </div>
        </section>      



           </div> 
     )
    } 

export default SMARTCARD    
    
export const query = graphql`
    query smartCardQuery {
        allSmartCardYaml{
            edges{
              node{
                heading
                text
                points{
                  moretextintro
                  price
                }
                features{
                  image
                  head
                  text
                }
                benefits{
                  image
                  heading
                  text
                  token
                  url
                }
                faqs{
                  question
                  answer
                  headingId
                  collapseId
                }
              }
            }
          }
        }
    `        