import React from "react"
import Link from  'gatsby-link'
// import markdownify from '../../util/markdownify.js'
import { withPrefix } from "gatsby-link"
import {Helmet} from "react-helmet"
import markdownIt from 'markdown-it'
import linkifyIt from 'linkify-it'
var lf = require('linkify-it')(
  {
  
  
}
);
lf
  .add('git:', 'https:')           // Add `git:` protocol as "alias"
  .set({ fuzzyIP: true }); 
const md = markdownIt({
  html: true,
  linkify: true,
  xhtmlOut: false,
}) 


const JOB = ({location,data,children }) => {
  if (location.pathname === withPrefix ("/jobs/") || location.pathname === withPrefix ("/job") ){
      require("./Job.css")
  }
      else{
          console.log("fail")
      }

     return(
        <div className="home-content">
          <Helmet>
                <title>JOB's</title>
              </Helmet>  
           <section id= "banner">
                <div className="image-container">
                  {data.allJobsYaml.edges[0].node.images.map((img, i) =>
                <img className="insta-banner" src={"/redcarpetcom/Jobs/" + img.img } alt="RedCarpet-Life"/>
              )}
        </div>
         <div id="instaBannerCarousel" className="carousel slide visible-xs" data-ride="carousel">
          <div className="carousel-inner">
          {data.allJobsYaml.edges[0].node.images.map((img, i) =>
            <div className="item active">
            <img className="insta-banner" src={"/redcarpetcom/Jobs/" + img.img } alt="RedCarpet-Life"/>
        </div>
        )}
        </div>
      </div>
    </section>
    
    <section className="intro">
        <div className="textContainer">
          <h3> {data.allJobsYaml.edges[1].node.heading}</h3>
          <div className="text">
            <p>{data.allJobsYaml.edges[1].node.text}</p>
          </div>
        </div>
        <a id="openingsBtn" className="btn btn-default" href="#job-listing">Current Openings</a>
      </section>

        <div className="container-fluid infoSections">
      {data.allJobsYaml.edges[2].node.sections.map((sec, i) =>
            <div className="sectionContainer">

              <div className="content ">
              <h4>{sec.head}</h4>
              <p>
               {sec.text.map((text,i)=>
               
                 <p>{text.content}<br/>
                   {text.links.map((lib,i)=>
                   
                   <ul type="disc"><li>{lib.data}&nbsp; &nbsp; <a href={lib.url}>{lib.token}</a></li></ul>
                   )}
                 </p>
                 
                 

               
               
               )}
              </p>
            </div>
            <div className="imageBox">
              <img src={"" + sec.image}/>
             
            </div>
            <div className="clearfix"></div>

            </div>
      )}
        </div>


 
  <section className="intro" id="job-listing">
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <h3>{data.allJobsYaml.edges[3].node.name}</h3>
        {data.allJobsYaml.edges[3].node.branch.map((qa, i) =>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id={""+qa.headingId}>
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={"#"+ qa.collapseId} aria-expanded="true" aria-controls="collapseOne">
                   <p>{qa.profile} </p>
                  </a>
                </h4>
              </div>
              <div id={""+qa.collapseId}  className="panel-collapse collapse" role="tabpanel" aria-labelledby={""+ qa.headingId}>
                <div className="panel-body text">{qa.job.map((jb,i)=>
                  <div class="panel-body">
                        <div class="panel-body">
                            <h3>{jb.jobId}</h3>
                            <div class="panel-group" id={jb.headingJobId}>
                                <div class="panel">
                                    <a data-toggle="collapse" data-parent={jb.headingJobId} href={"#"+jb.collapsejobId}>{jb.jobId} &raquo;
                                    </a>
                                    <div id={jb.collapsejobId} class="panel-collapse collapse">
                                        <div class="panel-body" style={{color: `#989797`,
    fontWeight: `bold`,
    fontSize: `16px`}}>At Redcarpet<br/>Delhi, India<br/><h4>Description</h4>{jb.description}<br/>
    <h4>Qualification</h4>{jb.quali}<br/>
                                        <a id="apply"href={jb.link}>Apply here</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                  )}
                  
                  
                  
                  
                   </div>
              </div>
            </div>
            )}
         </div>
    </section>
	  




        </div>
        
     );
    };

export default JOB

export const query = graphql`
    query JobQuery {
  allJobsYaml{
   edges{
    node{
      heading
      text
      images{
        img
        desc {
          name
          demo
        }
        
      }
      sections{
        head
        image
        text {
          content
          links{
            data
            token
            url
          }
        }
      }
      name
      branch{
        profile
        job{
          jobId
          quali
          description
          headingJobId
          collapsejobId
          link
        }
        headingId
        collapseId
      }
    }
  }
  }
  }
    
    `        