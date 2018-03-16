import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"
import {Helmet} from "react-helmet";


const CAMPUSAMBASSADOR = ({location,data }) => {
  if (location.pathname === withPrefix ("/campus_ambassador/") || location.pathname === withPrefix ("/campus_ambassador") ){
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
      <img className="bannerImage" src="/redcarpetcom/campus-ambassador/images/banner.png" alt="RedCarpetUp Banner"/>
     </div>
   
      
   </section>



   <section className="intro">
                <div className="textContainer">
                  <h3>{data.allCampusAmbassadorYaml.edges[0].node.intro}</h3>
                  

                </div>
    </section>
<section className="steps one">
                <div className="approval" style={{ border: `1px solid grey`,
    borderRadius: `5px`,
    padding: `0 5% 5% 10%`}}> 
             <div className="stepone">
                    <h2> {data.allCampusAmbassadorYaml.edges[0].node.stepone} </h2>
                 </div>
              <div className="stepfirst">   
             <div className="points">     
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.pointone}</div> 
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.pointtwo}</div>
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.pointthree}</div>
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.pointfour}</div>
                </div>
                   <div className="notes">
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.noteone}</div>
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.notetwo}</div>
                </div>
                </div>
            </div>
        </section>
        
        <section className="steps two">
                <div className="approval"> 
             <div className="stepone">
                    <h2>{data.allCampusAmbassadorYaml.edges[0].node.steptwo}</h2>
                 </div>
              <div className="stepfirst">   
             <div className="points">     
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.pointsone}</div> 
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.pointstwo}</div>
                   <div className="row">{data.allCampusAmbassadorYaml.edges[0].node.pointsfour}</div>
                </div>
                </div>
            </div>
        </section>
        <section>
    <div className="mainContent">

  
  
    

  
  <div className="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">
         

    <div role="tabpanel" class="tab-pane" id="profile">
        <div className="container-fluid stepper">
            <h2>How To earn ?3.5 Lakh with RedCarpet</h2>
            <ul>
                {/*
                {{ range $i, $el := .Site.Data.campus_ambassador.steps }}
                <li class="row">
                    <div class="col-md-2 col-xs-1 col-lg-2" onclick="showMyDiv({{ add $i 1 }});">{{ add $i 1 }}</div><div onclick="showMyDiv({{ add $i 1 }});" style="font-weight:bold;" class="{{add $i 1}}stepsText col-md-6 col-xs-10 col-lg-9">{{ .text |markdownify}}</div>
                    <div class="row ruler deactivated" id="{{ add $i 1 }}">
                        <div class="col-md-4"><img src="/campus-ambassador/images/card sell/{{.image}}" alt=""></div>
                    </div>
                </li>
                {{ end }}
                 */}
            </ul>
        </div>
    </div>
  </div>

</div>
</div>

    </section>

 {/*

<div class="modal fade modal-form" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
                 <div class="modal-header">
                     <h2 class="modal-title" id="exampleModalLabel">APPLY</h2>
                     
                     
                   </div>
                   
                         <div class="modal-body">
           
           <form id="refralform" method="post" onsubmit="submitted=true;">

                         <div class="pop applicantname">
                             <label for="name">Name</label><br/>
                               <input class="form-control" name="name" type="text" id="name" size="30" required/>
                             </div>
                            
                                    <div class="pop phone">
                                      <label for="phone">Phone</label><br/>
                                    <input class="form-control" id="phone" name="phone" type="text"  pattern="[7-9]{1}[0-9]{9}" title="Please do not include +91,Enter correct phone number"  required/>
                                 </div>

                                   <div class="pop refername">
                                        <label for="refername">College</label><br/>
                                          <input class="form-control" name="refername" type="text" id="refername" size="30" required/>
                                        </div>
                                       
                                           
                        
                      
                                 <div class="pop formbutton">
                                 <button class="popsubmit"  onclick="sendReferalData()">SUBMIT
                                   </button>
                             </div>
                             </form> 
                        </div>
                    
                  
               </div>
           </div>
                   </div>
                   
                   
                   
                   </div>
        
       </div></div>
       */ }
        


      

        </div>
    )

}
export default CAMPUSAMBASSADOR 

export const query = graphql`

    query CampusAmbassadorQuery
    {
  allCampusAmbassadorYaml{
    edges{
      node{
      id
        name
        firstheadline
        text
        whatyougetheading
        stipend
        firstlist
        growsubheading
        list
        otherbenefits
        listtwo
        whattodoheading
        listthree
        note
        steps {
          text
          image
        }
        intro
        stepone
        pointone
        pointtwo
        pointthree
        pointsfour
        noteone
        notetwo
        steptwo
        pointsone
        pointstwo
        pointsthree
        pointsfour
      }
    }
  }
}
`