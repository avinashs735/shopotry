import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"

const SmartCard = ({location,data }) => {

    if (location.pathname === withPrefix ("/smart-card/") || location.pathname === withPrefix ("/smart-card") ){
        require("./SmartCard.css")



    }
        else{
            console.log("fail")
        }
  
       return(
<div className="home-content">
      
         <div class="intro blue-section clearfix" >
        <div class="container"  >
            <h2 style={{textAlign:"center", marginTop:"50px", marginBottom:"-20px"}}>
            <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.headlineintro}}>
                    </div>
                
                </h2><br/>
                <h3 style={{textAlign:"center"}}>
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.headingintro1}}>
                    </div>
                <br/>
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.headingintro2}}>
                    </div><br/>
                    <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.headingintro3}}>
                    </div></h3>
            <div class="intro-img img-wrapper">
                <img class="img-responsive" src="/redcarpetcom/smart-card/card.jpg" alt="Flexi-Card" style={{
                    display: `block`,
    margin: `0 auto`,
    height: `250px`,
    marginBottom: `-40px`,
    marginTop: `40px`,
    borderRadius: `10px`,
    boxShadow: `0px 0px 2px #c37474`,
    border: `solid 4px #44276c`
                }}/>
            </div>
            <div class="row intro-caption narrow-section text-center">

                <h3 class="yo">
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.textintro}}>
                </div>
                </h3>
                <h2>
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.moretextintro}}>
                </div>

                </h2>
                <h2 style={{fontSize:"22px"}}>
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.offerintro}}>
                </div>
                </h2>

                <h2> <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.priceintro }}>
                </div> </h2>
                <p>
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.cardfeeintro }}>
                </div>
                     </p>
                <a style={{color:"#fff"}} class="btn btn-default btn-accent" data-toggle="modal" data-target="#myModal">
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.applyintro }}>
                </div>
                </a>
                <h4><b>
                <div dangerouslySetInnerHTML={{ __html :data.allSmartCardYaml.edges[0].node.vouchersintro}}>
                </div></b></h4>
            </div>
</div>

<div id="features" class="features-middle-image section white-section text-center clearfix">
        <div class="container">
            <div class="row section-head">
                <div class="col-md-8 col-md-offset-2">
                    <h2>{data.allSmartCardYaml.edges[0].node.featuresheadline}</h2>
                    <h2>{data.allSmartCardYaml.edges[0].node.featuressubheadline}</h2>
                    <p> {data.allSmartCardYaml.edges[0].node.featuerestext}</p>
                </div>
            </div>
            <div class="row">
                
                <div class="col-md-4 col-sm-6 col-xs-12 left-features">
                    
                    <div class="feature">
                        <div class="icon">
                            <img src="/redcarpetcom/smart-card/payment-method.png" alt=""/>
                        </div>
                        <div class="desc">
                            <h5 class="item-header"><b>{data.allSmartCardYaml.edges[0].node.featuressubheading}</b></h5>
                            <p>{data.allSmartCardYaml.edges[0].node.featurestext}</p>
                        </div>
                    </div>
                    
                    <div class="feature">
                        <div class="icon">
                            <img src="/redcarpetcom/smart-card/online-store.png" alt=""/>
                        </div>
                        <div class="desc">
                            <h5 class="item-header"><b>{data.allSmartCardYaml.edges[0].node.featuresubtexttwo}</b> </h5>
                            <p>{data.allSmartCardYaml.edges[0].node.featurestexttwo}</p>
                        </div>
                    </div>
                    
                    <div class="feature">
                        <div class="icon">
                            <img src="/redcarpetcom/smart-card/credit-card.png" alt=""/>
                        </div>
                        <div class="desc">
                            <h5 class="item-header"><b>{data.allSmartCardYaml.edges[0].node.featuresitemheader} </b></h5>
                            <p> {data.allSmartCardYaml.edges[0].node.featuresitemtext}</p>
                        </div>
                    </div>
                </div>
               
                <div class="col-md-4">
                    <div class="middle-img">
                        <img class="img-responsive" src="/redcarpetcom/smart-card/card.jpg" alt="Flexi-Card" />
                        <div class="feature" style={{marginTop: `50px`}}>
                            <div class="icon">
                                <img src="/redcarpetcom/smart-card/lotus-position.png" alt=""/>
                            </div>
                            <div class="desc">
                                <h5 class="item-header"><b>{data.allSmartCardYaml.edges[0].node.featurestexteight}</b></h5>
                                <p>{data.allSmartCardYaml.edges[0].node.featuresitemtext}</p>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="col-md-4 col-sm-6 col-xs-12 right-features">
                   
                    <div class="feature">
                        <div class="icon">
                            <img src="/redcarpetcom/smart-card/browser.png" alt=""/>
                        </div>
                        <div class="desc">
                            <h5 class="item-header"><b>{data.allSmartCardYaml.edges[0].node.featurestexteight}</b></h5>
                            <p>{data.allSmartCardYaml.edges[0].node.featuresdescriptioneight}</p>
                        </div>
                    </div>
                    
                    <div class="feature">
                        <div class="icon">
                            <img src="/redcarpetcom/smart-card/calendar.png " alt=""/>
                        </div>
                        <div class="desc">
                            <h5 class="item-header"><b>{data.allSmartCardYaml.edges[0].node.featuresheadlinenine}</b></h5>
                            <p>{data.allSmartCardYaml.edges[0].node.featurestextnine}</p>
                        </div>
                    </div>
                    
                    <div class="feature">
                        <div class="icon">
                            <img src="/redcarpetcom/smart-card/idea.png " alt=""/>
                        </div>
                        <div class="desc">
                            <h5 class="item-header"><b>{data.allSmartCardYaml.edges[0].node.featuresheadlineten}</b></h5>
                            <p>{data.allSmartCardYaml.edges[0].node.featurestextten}</p>
                        </div>
                    </div>

                </div>
                
            </div>
          
        </div>
        
    </div>

    <div class="main" style={{background: `#43b889`,color:`white`}}>

        
        <div id="benefits" class="features-text-middle-image section blue-section text-center clearfix">
            <div class="container">
                <div class="row section-head">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 style={{color:`white`}}>{data.allSmartCardYaml.edges[0].node.benefitsheadline}</h2>
                        <h3 style={{color:`white`}}>{data.allSmartCardYaml.edges[0].node.benefitstext}</h3>
                    </div>
                </div>

                <div class="row">
                   
                    <div class="col-md-4 col-sm-6 col-xs-12 left-features">
                        
                    
                        <div class="feature">
                            <div class="icon">
                                <img src="/redcarpetcom/smart-card/cal.png" width="100" height="100" alt="" style={{float:`right`}}/>
                            </div>
                            <div class="desc" style={{float:`right`}}>
                                <h5 class="item-header">{data.allSmartCardYaml.edges[0].node.nointeresthead}</h5>
                                <p>{data.allSmartCardYaml.edges[0].node.nointerest}</p>
                            </div>
                        </div>
                   

                    </div>
                    
                    <div class="col-md-4">
                        
                        <div class="feature" style={{marginTop: `50px`}}>
                            <div class="icon">
                                <img src="/redcarpetcom/smart-card/deal.png" width="100" height="100" alt=""/>
                            </div>
                            <div class="desc">
                                <h5 class="item-header">{data.allSmartCardYaml.edges[0].node.dealsheadline}</h5>
                                <p> {data.allSmartCardYaml.edges[0].node.dealstext}<br/>Explore our deals <a href="{{ .Site.BaseURL }}deals/">here</a></p>
                            </div>
                        </div>
                    <div class="feature">
                            <div class="icon">
                                <img src="/redcarpetcom/smart-card/more.png" width="100" height="100" alt=""/>
                            </div>
                            <div class="desc">
                                <h5 class="item-header">{data.allSmartCardYaml.edges[0].node.interestheader}</h5>
                                <p>{data.allSmartCardYaml.edges[0].node.interesttext}</p>
                            </div>
                        </div>



                    </div>

                    
                    <div class="col-md-4 col-sm-6 col-xs-12 right-features">


                        
                        <div class="feature">
                            <div class="icon">
                                <img src="/redcarpetcom/smart-card/interstrate.png" width="100" height="100" alt=""/>
                            </div>
                            <div class="desc">
                                <h5 class="item-header">{data.allSmartCardYaml.edges[0].node.moreheadline}</h5>
                                <p>{data.allSmartCardYaml.edges[0].node.moretext}</p>
                            </div>
                        </div>

                    </div>
                    
                </div><br/>
                
                <h4 style={{color:`white`}}><p>{data.allSmartCardYaml.edges[0].node.moretext1} <a href="/">HERE</a></p></h4>

            </div>
            
        </div>
</div>

 <div class="section white-section" id="steps">
      <div class= "steps container-fluid">
        <div class="row section-head">
            <div class="col-md-8 col-md-offset-2 text-center">

                <h2>{data.allSmartCardYaml.edges[0].node.steps.heading}</h2>

            </div>
        </div>
        <div class="steplist row">
         
         {data.allSmartCardYaml.edges[0].node.steps.steplist.map((stepList,i)=>
            <div  style={{float:`left`,marginLeft:`50px`,marginRight:`20px`}}>
         <div class="stepContainer" >

          <div class="number">
              <div>{stepList.step}</div>
          </div>
            <div class= "imageContainer" >
            <img src={"/redcarpetcom/smart-card/steps/"+stepList.image} style={{    maxWidth: `200px`,
    maxHeight: `400px`}}></img>

            </div>
            <div class="caption">
                <p> {stepList.caption}</p>
            </div>
            <div class="arrow down visible-xs" style={{
            color: `white`,
    backgroundColor: `#39ACE5`,
    width: `50px`,
    height: `50px`,
    borderRadius: `50%`,
    fontSize: `20px`,
paddingLeft:`15px`,
paddingTop:`10px`,
    display: `inline-block`}}>
                  <i class="fa fa-arrow-down"></i>
            </div>

        </div>
        <div class="arrow right" style={{float:`right`,marginRight:`-80px`,marginTop:`-130px`,
            color: `white`,
    backgroundColor: `#39ACE5`,
    width: `50px`,
    height: `50px`,
    borderRadius: `50%`,
    fontSize: `20px`,
paddingLeft:`15px`,
paddingTop:`10px`,
    display: `inline-block`}}>
              <i class="fa fa-arrow-right"></i>
        </div>
        </div>
         )}
  
      </div>

      <div class="container-fluid">
      <div class="arrow down hidden-xs" style={{    float:`right`,color: `white`,
    backgroundColor: `#39ACE5`,
    width: `50px`,
    height: `50px`,
    borderRadius: `50%`,
    fontSize: `20px`,
paddingLeft:`15px`,
paddingTop:`10px`,
    display: `inline-block`}}>
            <i class="fa fa-arrow-down"></i>
      </div>
    </div>

      <div class="cardDispatch steplist row">
         {data.allSmartCardYaml.edges[0].node.steps.cardDispatchSteps.map((cDS,i)=>
         <div style={{ float:`right`,marginLeft:`30px`,width:`300px`}}>
      <div class="arrow left"style={{float:`left`,background:`black`,marginTop:`40px`,marginRight:`10px`,float:`right`,color: `white`,
    backgroundColor: `#39ACE5`,
    width: `50px`,
    height: `50px`,
    borderRadius: `50%`,
    fontSize: `20px`,
paddingLeft:`15px`,
paddingTop:`10px`,
    display: `inline-block`}}>
            <i class="fa fa-arrow-left"></i>
      </div>
      <div class="stepContainer">
        <div class="number">
            <div>{cDS.step}</div>
        </div>
          <div class= "imageContainer">
          <img src={"/redcarpetcom/smart-card/steps/"+cDS.image} style={{    maxWidth: `200px`,
    maxHeight: `400px`}}></img>

          </div>
          <div class="caption">
              <p>{cDS.caption}</p>
          </div>
          <div class="arrow down visible-xs">
                <i class="fa fa-arrow-down"></i>
          </div>

      </div>
</div>

         )}
    </div>
      </div>
  </div>

<div class="faqs section white-section" id="faq">
            <div class="container">
                <div class="row section-head">
                    <div class="col-md-8 col-md-offset-2 text-center">

                        <h3>{data.allSmartCardYaml.edges[0].node.faqheadline}</h3>

                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-md-8 col-md-offset-2">
                        
                        <div class="accordion" id="accordion">
                            
                            <div class="panel">
                                <div class="panel-title">
                                    <a href="index.html#collapse1" data-toggle="collapse" data-parent="#accordion">
                                        <span></span>{data.allSmartCardYaml.edges[0].node.questionone }</a>
                                </div>
                                <div class="panel-collapse collapse in" id="collapse1">
                                    <div class="text">
                                        <p>{data.allSmartCardYaml.edges[0].node.answerone }</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="panel">
                                <div class="panel-title">
                                    <a class="collapsed" href="index.html#collapse2" data-toggle="collapse" data-parent="#accordion">
                                        <span></span>{data.allSmartCardYaml.edges[0].node.questiontwo }</a>
                                </div>
                                <div class="panel-collapse collapse" id="collapse2">
                                    <div class="text">
                                        <p>{data.allSmartCardYaml.edges[0].node.answertwo }</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="panel">
                                <div class="panel-title">
                                    <a class="collapsed" href="index.html#collapse3" data-toggle="collapse" data-parent="#accordion">
                                        <span></span>{data.allSmartCardYaml.edges[0].node.questionthree }</a>
                                </div>
                                <div class="panel-collapse collapse" id="collapse3">
                                    <div class="text">
                                        <p>{data.allSmartCardYaml.edges[0].node.answerthree }</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="panel">
                                <div class="panel-title">
                                    <a class="collapsed" href="index.html#collapse4" data-toggle="collapse" data-parent="#accordion">
                                        <span></span>{data.allSmartCardYaml.edges[0].node.questionfour }</a>
                                </div>
                                <div class="panel-collapse collapse" id="collapse4">
                                    <div class="text">
                                        <p>{data.allSmartCardYaml.edges[0].node.answerfour }</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="panel">
                                <div class="panel-title">
                                    <a class="collapsed" href="index.html#collapse5" data-toggle="collapse" data-parent="#accordion">
                                        <span></span>{data.allSmartCardYaml.edges[0].node.questionfive }</a>
                                </div>
                                <div class="panel-collapse collapse" id="collapse5">
                                    <div class="text">
                                        <p>{data.allSmartCardYaml.edges[0].node.answerfive}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="panel">
                                <div class="panel-title">
                                    <a class="collapsed" href="index.html#collapse6" data-toggle="collapse" data-parent="#accordion">
                                        <span></span>{data.allSmartCardYaml.edges[0].node.questionsix } </a>
                                </div>
                                <div class="panel-collapse collapse" id="collapse6">
                                    <div class="text">
                                        <p>{data.allSmartCardYaml.edges[0].node.answersix }</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="panel">
                                <div class="panel-title">
                                    <a class="collapsed" href="index.html#collapse7" data-toggle="collapse" data-parent="#accordion">
                                        <span></span>{data.allSmartCardYaml.edges[0].node.questionseven }</a>
                                </div>
                                <div class="panel-collapse collapse" id="collapse7">
                                    <div class="text">
                                        <p>{data.allSmartCardYaml.edges[0].node.answerseven }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        

</div>

    </div>

       )
    }

export default SmartCard

export const query = graphql`
    query SmartCardQuery {
  allSmartCardYaml{
    edges{
      node{
         headlineintro
        headingintro1
        headingintro3
        headingintro2
        textintro
        offerintro
        moretextintro
        priceintro
        cardfeeintro
        applyintro
        vouchersintro
        featuresheadline
        featuressubheadline
        featuerestext
        featuresheadlineten
        featurestextten
        featuresheadlinenine
        featurestextnine
        featurestexteight
        featuresdescriptioneight
        featurestextsix
        featuressubtextsix
        featurestextsix
featuresitemtext
featuresitemheader
featurestexttwo
featuresubtexttwo
featurestext
featuressubheading
benefitsheadline
benefitstext
nointeresthead
nointerest
dealsheadline
dealstext
interestheader
interesttext
moreheadline
moretext
moretext1
 faqheadline
questionone
        questiontwo
        questionthree
        questionfour
        questionfive
        questionsix
        questionseven
        answerone
        answertwo
        answerthree
        answerfour
        answerfive
        answersix
        answerseven
        steps{
          heading
          steplist{
            image
            step
            caption
          }
          cardDispatchSteps{
            image
            step
            caption
          }
        }
      }
    }
  }
}
    `  