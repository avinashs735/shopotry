import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'


export default ({ data }) =>{
    return(
            <div className="home-content">
                  <section id= "banner">
                <div id="mainBanner" class="container-fluid">
                    <img src="/redcarpetcom/task-one/images/banner.svg" alt="RedCarpetUp banner"/>
                 </div>
                 </section>
                 <section class="socialize">
          <div class="textContainer">
            <h3>
            <div dangerouslySetInnerHTML={{ __html :data.allTaskOneYaml.edges[0].node.dummy.heading}}></div>

            </h3>
            </div>
            <div class="row">
             <div class="socializetext">
             <div dangerouslySetInnerHTML={{ __html :data.allTaskOneYaml.edges[0].node.dummy.text}}></div>
            </div>
        </div>
      </section>     





            </div>

    )
}


export const query = graphql`
query TaskOneQuery{
    allTaskOneYaml{
      edges{
        node{
          dummy{
            heading
            text
          }
          tasks{
            apphead
            apppoints{
              appone
              apptwo
              appthree
            }
            playstore
            socialhead
            socialpoints{
              socialone
              socialtwo
                      }
            joinhead
            joinpoints{
              joinone
              jointwo
            }
            mention
            proceed
          }
          contact{
            heading
            email
            phoneno
          }
        }
      }
    }
  }
  `