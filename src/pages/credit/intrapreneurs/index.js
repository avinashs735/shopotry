import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"
import {Helmet} from "react-helmet";


const INTRAPRENEURS = ({location,data }) => {
  if (location.pathname === withPrefix ("/intrapreneurs/") || location.pathname === withPrefix ("/intrapreneurs") ){
      require("./intrapreneur.css")
  }
      else{
          console.log("fail")
      }

     return(
        <div className="home-content">
            <Helmet>
                <title>Intrapreneur</title>
              </Helmet>  
    <section id="banner" >
       
   <div class="intro blues-section clearfix" style={{background:`#01adff`,display:` flex`,
    justifyContent: `left`}}>
        <div class="container">
            <img src="/redcarpetcom/intrapreneurs/images/mountain.png" class="im" />
            <h1 style={{textAlign:` center`,color: `white`}} id="mytypingText">INTRAPRENEUR TO ENTREPRENEUR</h1>
            <div class="row intro-caption narrow-section text-center">
                <a class="btn btn-default btn-accent journey" href="index.html" id="breathing-button">Come Join the Journey</a>
            </div>
        </div>
    </div>
      
   </section>

   <div class="container">


            <div class="row">

                <div class="col-md-8 story" style={{marginBottom: `30px`}}>
                    <h1 class="iss"> THE INDIAN STUDENT STORY </h1>
                    <p>A country is as independent as its Students. India is home to 6 Crore+ College Students living outside their homes. Being dominated by conservative society, students are not encouraged to be financially independent. Unlike in developed economies, Indian Students don’t have Credit Profiles. They don’t have easy access to funds for their new ideas, projects, wishes etc. With the advent of technology, globalisation &amp; startups,students will be a significant contributor to the economic change. <br/><br/> 6 crores students spending ₹6k/month on average amounts to ₹432,000 crores annually &amp; 70℅ of this has been through cash given by parents. This creates a barrier for the inclusion of whole student community in India’s financial ecosystem.
                    </p>
                    <div class="row intro-caption narrow-section text-center">
                        <a class="btn btn-default btn-accent journey" href="index.html" id="breathing-button">Come Join the Journey</a>
                    </div>
                </div>

                <div class="col-md-4">
                    <img src="/redcarpetcom/intrapreneurs/images/student.png" class="ims"/>
                </div>
            </div>
        </div>

<div class="intro green-section clearfix" style={{background:`#D2E080`}}>
        <div class="container">


            <div class="row" >

                <div class="col-md-4">

                    <img src="/redcarpetcom/intrapreneurs/images/steps.png" class="ims"/>
                </div>
                <div class="col-md-8 story" style={{marginBottom: `30px`}}>
                    <h1 class="iss"> THE REDCARPET STORY </h1>
                    <p>Redcarpet is a mission to bring this 6 crores+ strong student community into the financial ecosystem of India with the help of technology. Indian banks with their limited service capability can’t help these students to become a direct contributor to Indian economy. With the vision of experienced founders Redcarpet aims to
                        </p><ul style={{color: `white`}}>
                            
                            <li>Empower students to become financially independent </li>
                            
                            <li>Provide them financial wisdom. </li>
                            
                            <li>Build Hassle-free &amp; secure Fintech infra for easy Cashless transactions. </li>
                            
                            <li>Create credit profile for students. </li>
                            
                            <li>Increase the real time purchasing power. </li>
                            
                            <li>Provide micro loans to students payable in easy EMI’s with minimum interest to fulfil their dreams, invest in themselves, join coachings &amp; courses, etc. </li>
                            
                            <li>Support them for their crazy ideas, because we are the crazy ones who believe in you. </li>
                            
                            <li>COME JOIN THE JOURNEY </li>
                            

                        </ul>
                    <p></p>
                    <div class="row intro-caption narrow-section text-center">
                        <a class="btn btn-default btn-accent journey" href="index.html" id="breathing-button">Come Join the Journey</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

   
   <div class="intro yellow-section clearfix">
        <div class="container">


            <div class="row">


                <div class="col-md-8 story" style={{marginBottom: `20px`}}>
                    <h1 class="iss"> YOUR STORY </h1>
                    <p>We are very well aware that Empowering 6 Crores Students financially and enabling them with financial knowledge is neither a simple task nor can be achieved by one single organisation. The war for Financial Empowerment of Students can be won only if the soldiers are Students themselves. <br/><br/> This mission needs a ground soldier in every college, every classroom of india. You, the brightest of all, the most endeavouring of all, are going to be the one making this dream come true. You’ll be the empowered one among thousands and you will empower thousands!! <br/><br/>
                        <span style={{textAlign: `center`}}>Excited for this Empowerment Journey of 6 Crores College Students?? The Journey of your transformation from a student to Studentpreneur!! From being an Intrapreneur to Entrepreneur!! We’re excited to host you!!!
</span>

                    </p>
                    <div class="row intro-caption narrow-section text-center">
                        <a class="btn btn-default btn-accent journey" href="index.html" id="breathing-button">Come Join the Journey</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="/redcarpetcom/intrapreneurs/images/leader.jpg" class="ims" style={{borderRadius: `100%`}}/>
                </div>

            </div>
        </div>

    </div>


<div class="section lime-section" id="journey">
            <div class="container">


                <h2 class="iss ytj" style={{textAlign: `center`, marginTop: `40px`}}>YOUR TRANSFORMATION JOURNEY<br/>
                </h2>
                


                <div class="row hmm">
                    
                    <div class="col-md-12 cardo">
                        
                        <h4 class="offmid">INTRAPRENEURS </h4>
                        <hr style={{width: `75%`}}/>
                        <ul class="okk">
                            
                            <li><strong>User Acquisition Hero</strong> in your college/Area of Influence </li>
                            
                            <li><strong>Chacha Chaudhary</strong> for financial knowledge &amp; assistance </li>
                            
                            <li><strong>Redcarpet Brand Celebrity-</strong> making Redcarpet synonymous with financial needs </li>
                            
                            <li><strong>Student Empowerment Executive-</strong> Helping users &amp; taking feedbacks </li>
                            
                         </ul>
                    </div>
                    
                    <div class="col-md-12 cardo">
                        
                        <h4 class="offmid">STUDENPRENEURS </h4>
                        <hr style={{width: `75%`}}/>
                        <ul class="okk">
                            
                            <li><strong>Relationship Builder-</strong> Engage &amp; partner with societies &amp; student community </li>
                            
                            <li><strong>Strategy Master-</strong> Create strategies for the Intrapreneurs of your campus </li>
                            
                            <li><strong>Marketing Hero-</strong> creating tailored marketing plans </li>
                            
                         </ul>
                    </div>
                    
                    <div class="col-md-12 cardo">
                        
                        <h4 class="offmid">ENTREPRENEURS </h4>
                        <hr style={{width: `75%`}}/>
                        <ul class="okk">
                            
                            <li><strong>Mentoring-</strong> Help Intrapreneurs &amp; Studentpreneurs with your insights </li>
                            
                            <li><strong>Leader-</strong> plan &amp; organise financial quizzes, events, seminars etc in partnership </li>
                            
                            <li><strong>Assess-</strong> the Redcarpet user Personality &amp; Analyse the Feedback </li>
                            
                            <li><strong>Unique Startup Idea-</strong> Work &amp; Create your own Startup </li>
                            
                         </ul>
                    </div>
                    



                </div>
                <div class="row intro-caption narrow-section text-center">
                    <a class="btn btn-default btn-accent journey" href="index.html" id="breathing-button">Come Join the Journey</a>
                </div>
            </div>
        </div>    

<div class="clients section white-section" id="testimonial">
            <div class="container">
                <div class="row section-head">
                    <div class="col-md-8 col-md-offset-2 text-center">

                        <h3>What Existing <span style={{color:`#ef473d`}}>RedCarpetup</span> Intrapreneurs Say </h3>

                    </div>
                </div>
                <div class="row odd">
                    
                    
                    <div class="col-md-4">
                        <div class="item clearfix">
                            <div class="text">Since my 1st year, I’ve been financially independent and managing my expenses through scholarships, tuitions etc. Many times I had urgent need of money and faced troubles. But no bank gives small personal loan or credits to students. Now thanks to Flexi Credit Card, I’m truly independent.<br/><br/>
                            </div>
                            <img class="author-pic" src="/redcarpetcom/intrapreneurs/images/testimonial/chirag.jpeg" alt="customer-name "/>
                            <p class="author">Chirag - CBS ( 2nd Year)
                                </p>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="item clearfix">
                            <div class="text">I’m a great shopaholic but sadly my pocket money is fixed. And every 2-3 months, there comes a big-bang sale on e-commerce websites or malls Landing me in trouble with my necessary monthly expenditures. But now with RedCarpet Flexi, I can easily buy anything I want and pay in EMIs without disturbing my budget.
                            </div>
                            <img class="author-pic" src="/redcarpetcom/intrapreneurs/images/testimonial/nimit.jpeg" alt="customer-name "/>
                            <p class="author">Nimit - SRCC (1st Year)
                                </p>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="item clearfix">
                            <div class="text">Though I get fair amount of pocket money from my parents, there are several expenses that I can’t ask of from my parents. Like buying gifts for my gf or going on trips with her and other such things. Flexi helps in transacting both online &amp; offline easily hassle free. And I can always pay back to RedCarpet in EMIs on little Interests
                            </div>
                            <img class="author-pic" src="/redcarpetcom/intrapreneurs/images/testimonial/manish.jpeg" alt="customer-name "/>
                            <p class="author">Manish - DTU (3rd Year)
                                </p>
                        </div>
                    </div>
                    

            </div>
            
        </div>
        

        
        
        
    </div>


      

        </div>
    )

}
export default INTRAPRENEURS
