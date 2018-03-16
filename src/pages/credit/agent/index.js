import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

import './style.css'


export default ({ data }) =>{

    return(
        <div className="home-content">
         <header>
        <div className="container-fluid">

            <div className="row">
                <div className="col-lg-12">

                    <img className="img-responsive" src="/redcarpetcom/agent/img/redcarpet-agent-banner.jpg"  alt="redcarpet"/>
                </div>  
                </div>
              </div>
    </header>
    <section className="intro">
          <div className="textContainer">

            <div className="text">
              <p>
              <div   dangerouslySetInnerHTML={{ __html: data. allAgentYaml.edges[0].node.intro.text}}>
            </div>
              </p>
              {data.allAgentYaml.edges[0].node.content.map((cont, i) =>
              <div>
              <h4 align="left"><div   dangerouslySetInnerHTML={{ __html: cont.heading }}>
              </div></h4>
              <p>
                  <div   dangerouslySetInnerHTML={{ __html: cont.text }}>
              </div>
                              </p>
                            </div>  
              )}
            </div>

          </div>
      </section>


      <section style={{background:"#43b889"}} className="success" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 style={{color:"white"}}>ABOUT</h2>
                    <hr className="star-light"/>
                </div>
            </div>
            <div className="row aboutext">
                <div className="col-lg-4 col-lg-offset-2">
                    <p>
                    <div   dangerouslySetInnerHTML={{ __html: data. allAgentYaml.edges[0].node.aboutLeft}}>
            </div>
</p>
                </div>
                <div className="col-lg-4">
                    <p>
                    <div   dangerouslySetInnerHTML={{ __html: data. allAgentYaml.edges[0].node.aboutRight}}>
            </div>
                    </p>
                </div>
            </div>

        </div>
    </section>






        </div>
    )
}

export const query = graphql`
query Agent{
    allAgentYaml{
      edges{
        node{
          intro{
            text
          }
          content{
            heading
            text
          }
          aboutLeft
          aboutRight
        }
      }
    }
  }
  `