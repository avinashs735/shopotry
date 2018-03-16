import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"
import { Helmet} from "react-helmet"

const LOCATION = ({location,data }) => {
  if (location.pathname === withPrefix ("/location/") || location.pathname === withPrefix ("/location") ){
      require("./contact.css")
  }
      else{
          console.log("fail")
      }

     return(
        <div className="home-content">
            <Helmet>
                <title>Contact</title>
              </Helmet>  
         <section className="locationIframe" id="banner">
          <div className="google-map">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.400973705731!2d77.15875641507954!3d28.497581482471162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ffd4f33264e1752!2sRedCarpet+Tech+Pvt+Ltd%2C+Second+Floor%2C+Plot+A%2C+Khasra+%23360%2C+Near+Indian+Bank%2C+Behind+Centrum+Mall%2C+Sultanpur+Metro+Station+-110030!5e0!3m2!1sen!2s!4v1480838827175" width="100%" height="500px" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
          </div>
        </section>
        <section className="location-page">
            <div className="container">
                 <div className="col-md-5 text directions">
                 <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}}>
                </div>
                </div>
             <div className="col-md-5 col-md-offset-1 contactDiv">
              <h3>{data.allContactYaml.edges[0].node.heading}</h3>
              <p>
              {data.allContactYaml.edges[0].node.content}
              </p>
    </div>
    </div>
</section>

        </div>


     )
    }
export default LOCATION


export const pagequery = graphql`
query ContactQuery {
    allContactYaml{
        edges{
            node{
             heading
             content
             }
            }
          }
allMarkdownRemark(filter: { frontmatter:  { name: { eq:"direction"}}}){
    edges{
        node{
            frontmatter{
            name
           }
           html
         }
       }
     } 
    }
   ` 
