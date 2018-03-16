import React from "react"
import Link from  'gatsby-link'
import {Helmet} from "react-helmet";
import { withPrefix } from "gatsby-link"

const VIDEO = ({location,data }) => {
  if (location.pathname === withPrefix ("/video/") || location.pathname === withPrefix ("/video") ){
      require("./video.css")
      
  }
      else{
          console.log("fail")
      }

     return(
        <div className="home-content">
            <Helmet>
                <title>Video</title>
              </Helmet>  
    <section class='video_section'>
      <div class="container-fluid gallery">
        <h1>Get To Know Redcarpet</h1>
          <div class="container-fluid video_gallery">
              <div class="video_player ">
                <div class="embed-responsive embed-responsive-16by9" id="video_player">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1oLgm-RttZY" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>


            <div class="video_player ">
                <div class="embed-responsive embed-responsive-16by9" id="video_player">
                    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=3F0_QQSfg_o" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
              <div class="video_player ">
                <div class="embed-responsive embed-responsive-16by9" id="video_player">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1oLgm-RttZY" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
          </div>


      </div>

    </section>

        </div>
    )

}
export default VIDEO