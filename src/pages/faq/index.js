import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"
import {Helmet} from "react-helmet"


const FAQ = ({location,data }) => {
  if (location.pathname === withPrefix ("/faq/") || location.pathname === withPrefix ("/faq") ){
      require("./FAQ.css")
  }
      else{
          console.log("fail")
      }

     return(
         <div className="home-content">
           <Helmet>
                <title>Faq's</title>
              </Helmet>
             <section id="banner">
                 <div id="mainBanner" className="">
                <img className="bannerImage" src="/redcarpetcom/faq/banner.svg" alt="RedCarpetUp Banner"/>
            </div>
        <div className="overlayContent">
      <     div className="bannerText hidden-xs">
            <p></p>
            </div>
            <div className="downloadIcons hidden-xs" style={{marginRight:`0px`,marginTop:`350px`}}>
       <Link to='/https://goo.gl/qwgz5z/'  style={{ color: `white`,paddingLeft:`10px` }}> <img className="play" src="/redcarpetcom/googleplay.svg"/></Link>
       <Link to='#' style={{ color: `white` }}><img className="play" src="/redcarpetcom/appstore.svg"/></Link>
       </div>  
     </div>
     
   </section>
   <section className="intro notice">
        <div className="textContainer">
          <h3>{data.allFaqYaml.edges[0].node.heading}</h3>
          <div className="text">
            <p>{data.allFaqYaml.edges[0].node.intro }</p>
          </div>
        </div>
    </section> 

    <section className="intro faqs">
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        {data.allFaqYaml.edges[1].node.QA.map((qa, i) =>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id={""+qa.headingId}>
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={"#"+ qa.collapseId} aria-expanded="true" aria-controls="collapseOne">
                   <p>{qa.question} </p>
                  </a>
                </h4>
              </div>
              <div id={""+qa.collapseId}  className="panel-collapse collapse" role="tabpanel" aria-labelledby={""+ qa.headingId}>
                <div className="panel-body text"><p>{qa.answer}</p> </div>
              </div>
            </div>
            )}
         </div>
    </section>      

        </div>

     );

    };
export default FAQ

export const query = graphql`
    query FAQsQuery {
        allFaqYaml{
            edges{
              node{
                id
                heading
                intro
                QA{
                  question
                  answer
                  headingId
                  collapseId
                }
                heading
                Text
              }
            }
          }
        }
    `    