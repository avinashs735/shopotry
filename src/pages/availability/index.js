import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'
// import './style.css'


export default ({ data }) =>{

      return(
            <div>
                <Helmet>
                    <title>Availability</title>
                </Helmet>    
        <div className="bg-grad-header Center-Container"> <h1 className="text-center text-white">{data.allAvailabilityYaml.edges[0].node.heading}</h1>
         {/* <p className="text-center text-white">{data.allAvailabilityYaml.edges[0].node.text}</p> */}
          </div>
        
        <section className="jobs-images">
          <div className="container">
            <div className="row">
        
        
            {data.allAvailabilityYaml.edges[1].node.avail.map((ava, i) =>
       
                <div className="col-sm-4">
                  <img src={"/redcarpetcom/availability/" + ava.image} alt="sorry cat" width="auto" className="img-responsive"/>
        
                </div>
            )}
              
            </div>
           
            <div className="row">
              <div className="col-xs-10">
                  <p className="text-center">{data.allAvailabilityYaml.edges[0].node.text}</p>
            </div>
            </div>
          </div>
        
        </section>
        </div>
    
      )
    }

export const query = graphql`
 query AvailQuery {
  allAvailabilityYaml{
    edges{
      node{
        id
        heading
        text
        avail{
          image
        }
      }
    }
  }
}
    `          