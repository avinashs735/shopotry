import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

import './thankyou.css'


export default ({ data }) =>{
    return(
        <div>
        <section className="download">
            <div className="heading">
              <h1>
              <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.dummy.heading}}>
                    </div>
              </h1>
              <p>
              <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.dummy.text}}>
                    </div>
                  
              </p>
            </div>
            <div className="steps">
              <div className="row">
                <div className="icons">
                    <div className="col-lg-4 col-sm-4 col-xs-4">
                        <div className="content">
                  <div className="icon first-icon">
                <img className="icon" src="/redcarpetcom/thankyou/images/icon_three.png"/>
                <p>
                <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.icons.first}}>
                    </div>

                </p>
              </div>
                <img className="arrow" src="/redcarpetcom/thankyou/images/arrow.png"/>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-4 col-xs-4">
                    <div className="icon second-icon">
                <img className="icon" src="/redcarpetcom/thankyou/images/icon_two.png"/>
                  <p>
                  <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.icons.second}}>
                    </div>
                  </p>
                    </div>
                    <img className="arrow" src="/redcarpetcom//thankyou/images/arrow.png"/>
                    </div>
                   <div className="col-lg-4 col-sm-4 col-xs-4"> 
                    <div className="icon third-icon">
                <img className="icon" src="/redcarpetcom/thankyou/images/icon_one.png"/>
                <p>
                <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.icons.third}}>
                    </div>
                </p>
                </div>
              </div>
              </div>
              </div>
              </div>
            </section>

            <div className="break">
              <div className="breaktext">
                <div className="quote">
                <p>
                <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.break.text}}>
                    </div>
                </p>
                 <div className="tagtitle">
                <h1>
                <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.break.head}}>
                    </div>
                </h1>
              </div>
            </div>
            </div>
            </div>  

            <section className="benefits">   
          <div className="benefit-heading">
            <h1>
            <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefit.heading}}>
                    </div>
            </h1>
              <h5>
              <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefit.subheading}}>
                    </div>
              </h5>
            </div>
            <div className="steps">
                <div className="row">
                  <div className="benefit-icon">
                      <div className="col-lg-4 col-sm-4">
                    <div className="icon first-icon">
                      <img className="icon-benefit" src="/thankyou/images/benefit_two.svg"/>
                      <p className="icon-head">
                      <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefitpoint.first.head}}>
                    </div>
                      </p>
                  <p>
                  <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefitpoint.first.text}}>
                   </div>
                       </p>
                    </div>
                    
                    <div className="col-lg-4 col-sm-4">
                      <div className="icon second-icon">
                  <img className="icon-benefit" src="/redcarpetcom/thankyou/images/benefit_three.svg"/>
                    <p className="icon-head">
                    <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefitpoint.second.head }}>
                   </div>
                    </p>
                    <p>
                    <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefitpoint.second.text }}>
                   </div> 
                        </p>
                      </div>
                      </div>
                     <div className="col-lg-4 col-sm-4"> 
                      <div className="icon third-icon">
                  <img className="icon-benefit" src="/redcarpetcom/thankyou/images/benefit_one.svg"/>
                  <p className="icon-head">
                  <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefitpoint.third.head }}>
                  </div>
                  </p>
                  <p>
                  <div dangerouslySetInnerHTML={{ __html :data.allThankyouYaml.edges[0].node.benefitpoint.third.text }}>
                        </div>
                  </p>
                  </div>
                </div>
                </div>
                </div>
                </div>  
                </div>
             
          </section>



            </div>

    )

}

export const query = graphql`
query THankyouQuery{
    allThankyouYaml{
      edges{
        node{
          dummy{
            heading
            text
          }
          icons{
            first
            second
            third
          }
          break{
            text
            head
          }
          benefit{
            heading
            subheading
          }
          benefitpoint{
            first{
              head
              text
            }
            second{
              head
              text
            }
            third{
              head
              text
            }
          }
        }
      }
    }
  }
  `