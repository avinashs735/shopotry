import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link";
import {Helmet} from"react-helmet"

const CampusLeader = ({location,data }) => {
  if (location.pathname === withPrefix ("/campus-leaders/") || location.pathname === withPrefix ("/campus-leaders") ){
      require("./campusleader.css")
      
      
  }
      else{
          console.log("fail")
      }

return (
   <div className="home-content">
              <Helmet>
                <title>Campus Leaders</title>
              </Helmet>  
    <section id="banner">
    <div id="mainBanner" className="">
     <img className="bannerImage" src="/redcarpetcom/campus-leader/banner.svg" alt="RedCarpetUp Banner"/>
     </div>
     <div className="overlayContent">
      <div className="bannerText hidden-xs">
        <br/><br/>
         <p>&nbsp;&nbsp;&nbsp;&nbsp;{data.allCampusLeaderYaml.edges[0].node.bannerText}</p>
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
       
   <section className="intro" >
          <div className="textContainer introheading">
            <h3>{data.allCampusLeaderYaml.edges[1].node.heading}</h3>
            </div>
            <div className="row">
              <div className="col-lg-8">
               <div className="text introText "  style={{paddingLeft:`10px`,paddingTop:`10px`,paddingRight:`10px`}}>
               <p>{data.allCampusLeaderYaml.edges[1].node.text}</p>  
            </div>

          </div>
          <div className="col-lg-4 hidden-xs hidden-sm">
            <img src="/redcarpetcom/campus-leader/leader.svg"/>
          </div>
        </div>
      </section>

      <section className="benefits" >
          <div className="campus-content"style={{marginTop:`10px`,marginBotom:`10px`,marginLeft:`16%`,marginRight:`16%`}}>
              <div className="content-heading" style={{width:`100%`,textAlign:`left`,paddingBottom:`3px`,marginLeft:`20px`}}>
                 <h3> {data.allCampusLeaderYaml.edges[2].node.heading}</h3>
              </div>
              <div className="LOR-row" style={{width:`100%`}}>
                      <div className="LOR-content">
                        <h3 style={{width:`100%`,color:`#666666`,fontWeight:` bold`,
    fontWeight: 700,fontSize: `14px`,textTransform: `uppercase`}}>
                        {data.allCampusLeaderYaml.edges[2].node.benefits[0].letterhead}</h3><br/>
                        <p style={{color: `#666666`,
    fontSize: `16px`}}>{data.allCampusLeaderYaml.edges[2].node.benefits[0].lettertext}</p>
                      </div>
                      <div className="LOR-logo">
                          <img align="right"style={{position:`relative`,marginRight:`35px`,marginTop:`5px`}} src="/redcarpetcom/campus-leader/lor.svg"/>
                      </div>
              </div>
              <div className="LOR-row" style={{width:`100%`}}>
                      <div className="ROL-logo">
                          <img align="right"style={{position:`relative`,marginRight:`35px`,marginTop:`5px`}} src="/redcarpetcom/campus-leader/money.svg"/>
                      </div>
                      <div className="ROL-content">
                        <h3 style={{width:`100%`,color:`#666666`,fontWeight:` bold`,fontWeight: 700,fontSize: `14px`,textTransform: `uppercase`,paddingLeft:`25px`}}>
                        {data.allCampusLeaderYaml.edges[2].node.benefits[1].stipendhead}</h3><br/>
                        <p style={{color: `#666666`,
    fontSize: `16px`}}>{data.allCampusLeaderYaml.edges[2].node.benefits[1].stipendtext}</p>
                      </div>
                      
              </div>
              <div className="LOR-row" style={{width:`100%`}}>
                      <div className="LOR-content">
                        <h3 style={{width:`100%`,color:`#666666`,fontWeight:` bold`,
    fontWeight: 700,fontSize: `14px`,textTransform: `uppercase`}}>
                        {data.allCampusLeaderYaml.edges[2].node.benefits[2].eventhead}</h3><br/>
                        <p style={{color: `#666666`,
    fontSize: `16px`}}>{data.allCampusLeaderYaml.edges[2].node.benefits[2].eventtext}</p>
                      </div>
                      <div className="LOR-logo">
                          <img align="right"style={{position:`relative`,marginRight:`35px`,marginTop:`5px`}} src="/redcarpetcom/campus-leader/event.svg"/>
                      </div>
              </div>
               <div className="LOR-row" style={{width:`100%`}}>
                      <div className="ROL-logo">
                          <img align="right" style={{position:`relative`,marginRight:`35px`,marginTop:`5px`}} src="/redcarpetcom/campus-leader/incentive.svg"/>
                      </div>
                      <div className="ROL-content">
                        <h3 style={{width:`100%`,color:`#666666`,fontWeight:` bold`,
    fontWeight: 700,fontSize: `14px`,textTransform: `uppercase`}}>
                        {data.allCampusLeaderYaml.edges[2].node.benefits[3].incentivehead}</h3><br/>
                        <p style={{color: `#666666`,
    fontSize: `16px`}}>{data.allCampusLeaderYaml.edges[2].node.benefits[3].incentivetext}</p>
                      </div>
                      
              </div>
               <div className="LOR-row" style={{width:`100%`}}>
                      <div className="LOR-content">
                        <h3 style={{width:`100%`,color:`#666666`,fontWeight:` bold`,
    fontWeight: 700,fontSize: `14px`,textTransform: `uppercase`}}>
                        {data.allCampusLeaderYaml.edges[2].node.benefits[4].llhead}</h3><br/>
                        <p style={{color: `#666666`,
    fontSize: `16px`}}>{data.allCampusLeaderYaml.edges[2].node.benefits[4].lltext}</p>
                      </div>
                      <div className="LOR-logo">
                          <img align="right"style={{position:`relative`,marginRight:`35px`,marginTop:`5px`}} src="/redcarpetcom/campus-leader/learning.svg"/>
                      </div>
              </div>


          </div>


      </section>
          <section className="apply">
             <div className="row">
               <div className="applytext">
                 <p>To apply for the internship click here.</p>
                </div>
               <div className="applybutton">
                <button type="button" className="btn apply" data-toggle="modal" data-target=".modal-form">APPLY</button>
               </div> 
              </div>
            </section>

            <section className="campusleadervideo">
              <div className="row">
                <div className="leadervideoheading">
                  <p>Check out video for more campus leader program..</p>
                </div>
              </div>
              <div className="row">
                <div className="intrinsic-container intrinsic-container-16x9">
                  <iframe src="https://www.youtube.com/embed/edzt1eITtJM" frameborder="0" gesture="media" allowfullscreen/>
                </div>
              </div>
            </section>

            <section className="contact">
            <div className="row">
            <div className="text touch">
               <p>{data.allCampusLeaderYaml.edges[3].node.heading}</p>
            </div>
          </div> 
          <div className="row">
              <div className="text introText">
                  <p>{data.allCampusLeaderYaml.edges[3].node.contact[0].email}</p>
              </div>
            </div>
            <div className="row">
                <div className="text introText">
                    <p>{data.allCampusLeaderYaml.edges[3].node.contact[0].phoneno}</p>
                </div>
              </div> 
        </section>

   </div>

    );

};
export default CampusLeader

export const query = graphql`
query CampusLeaderQuery {
    allCampusLeaderYaml{
        edges{
          node{
            bannerText
            heading
            text
            heading
            benefits{
              letterhead
              lettertext
              stipendhead
              stipendtext
              eventhead
              eventtext
              incentivehead
              incentivetext
              llhead
              lltext
            }
            contact{
                email
                phoneno
            }
          }
        }
      }
}
`
