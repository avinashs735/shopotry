import React from "react"
import Link from  'gatsby-link'
import Helmet from 'react-helmet'

import './style.css'


export default ({ data }) =>{

    return(
        <div className="home-content">
        <header style={{backgroundColor:"#44276c"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src="/redcarpetcom/bookmyshow/img/bms.png" alt="bookmyshow"/>
                </div>
            </div>
        </div>
    </header>

    <div className="text">
        <div className="container ">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <p style={{fontFamily:"Montserrat"}}>
                    <div   dangerouslySetInnerHTML={{ __html: data.allBookmyshowYaml.edges[0].node.getOffer }}>
            </div>
                     
                    </p>
                </div>
            </div>
        </div>
    </div>

    <section className="order">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>
                        Order Now
                    </h2>
                    <hr className="star-primary"/>
                </div>
            </div>

            <div align="center"><img align="center" src="/redcarpetcom/bookmyshow/img/bms1k.png"/>
                <div className="row">
\

                    <form action="http://buy.faccha.com/" id="emiForm" method="get">
                        <h3>
                        <div   dangerouslySetInnerHTML={{ __html: data.allBookmyshowYaml.edges[0].node.A8132fc2d }}>
            </div>
                        </h3>
                        <h4>
                        <div   dangerouslySetInnerHTML={{ __html: data.allBookmyshowYaml.edges[0].node.Af77b06fa }}>
            </div>  

                        </h4>


                        <input type="hidden" name="product" value="I want a ₹2000 Gift Card"/>
                        <input type="hidden" id="price" name="price" value="You pay ₹1600 only" /><br/>
                        <input type="submit" value="Order Now!"/>
                    </form>
                    <br/>
                </div>


            </div>

        </div>
        </section>

        <section style={{backgroundColor:"#43b889"}} className="success" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>T&C</h2>
                    <hr className="star-light"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-lg-offset-2">
                <div   dangerouslySetInnerHTML={{ __html: data.allBookmyshowYaml.edges[0].node.terms}}>

                </div>
                <div className="col-lg-4">
                <div   dangerouslySetInnerHTML={{ __html: data.allBookmyshowYaml.edges[0].node.additionalTerms}}>

</div>
                </div>
            </div>
            <hr/><br/>

            <p style={{textAlign:"center"}}>Live your Dreams with RedCarpet’s “Khushiyon ke Credits”</p>

        </div>
        </div>
    </section>

</div>

    )
}
export const query = graphql`
query Bookmyshow{
    allBookmyshowYaml{
      edges{
        node{
          A8132fc2d
          A0f022ea3
          Ab44550ed
          Af77b06fa
          additionalTerms
          terms
          getOffer
          
        }
      }
    }
  }
  `