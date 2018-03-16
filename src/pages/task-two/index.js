import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'



export default ({ data }) =>{
    return(
        <div className="home-content">
         <section id= "banner">
        <div id="mainBanner" class="container-fluid">
          <img src="/redcarpetcom/task-two/images/banner.png" alt="RedCarpetUp banner"/>
        </div>
      </section>

      <section class="socialize">
          <div class="textContainer">
            <h3>
            <div dangerouslySetInnerHTML={{ __html :data.allTaskTwoYaml.edges[0].node.dummy.heading}}></div>
            </h3>
            </div>
            <div class="row">
             <div class="socializetext">
             <div dangerouslySetInnerHTML={{ __html :data.allTaskTwoYaml.edges[0].node.dummy.text}}></div>
            </div>
        </div>
      </section>

      
      <section id="mobilenumber">
            <script type="text/javascript">var submitted=false;</script>
            <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) window.location.href='https://sites.google.com/redcarpetup.com/campus-leader/tasks/choose-house'"></iframe>
        <form id="quizform" method="post" target="hidden_iframe"  onsubmit="submitted=true;">
        <div class="mobileumber">
            <label for="tasktwophone">Enter your mobile no.</label><br/>
            <input id="tasktwophone" name="tasktwophone"  pattern="[7-9]{1}[0-9]{9}" title="Please do not include +91,Enter correct phone number" required/>
        </div>
        <button id="submit" onclick="scoreTosheet()"> 
            SUBMIT
        </button>
        </form>
    </section>  

    
     <section class="contact">
            <div class="row">
            <div class="text touch">
                {/* {{.Site.Data.redcarpetcom.campusLeader.contact.heading | markdownify}} */}
            </div>
          </div> 
          <div class="row">
              <div class="text introText">
                  {/* {{.Site.Data.redcarpetcom.campusLeader.contact.email | markdownify}} */}
              </div>
            </div>
            <div class="row">
                <div class="text introText">
                    {/* {{.Site.Data.redcarpetcom.campusLeader.contact.phoneno | markdownify}} */}
                </div>
              </div> 
        </section>    




        </div>


    )
}


export const query = graphql`
query TasktwoQuery{
    allTaskTwoYaml{
      edges{
        node{
          dummy{
            heading
            text
          }
        }
      }
    }
  }
  `