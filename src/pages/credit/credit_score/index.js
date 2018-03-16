import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"
import {Helmet} from "react-helmet";


const CREDITSCORE = ({location,data }) => {
  if (location.pathname === withPrefix ("/campus_ambassador/") || location.pathname === withPrefix ("/campus_ambassador") ){
      require("./style.css")
  }
      else{
          console.log("fail")
      }

     return(

        
       <div id="main-containerpan">         





                <div class="wrapper_main anim">
                    <div class="main_container">
                        <div class="container">

                            


                            <div class="pg_title" style="color:#666;">
                                <div class="bi_line"></div>
                            </div>



                            <div class="on_clicker" id="open">
                                <ul class="cir">
                                    
                                    
                                    
                                </ul>
                                <div class="clear"></div>

                                <div class="score_indicator_box">
                                    <div class="scorebox">

                                        <div class="scale_holder">

                                            <div class="pointer no_anim">
                                                <div class="count">740</div>
                                            </div>
                                            
                                            <div class="basepointer no_anim">
                                                <div class="count">300</div>
                                            </div>

                                            <div class="indicator_scale">
                                                <div data-score="300" style="background-color:#ec232b;" class="first"></div>
                                                <div data-score="400" style="background-color:#f89223;"></div>
                                                <div data-score="500" style="background-color:#f8d03d;"></div>
                                                <div data-score="600" style="background-color:#cadc32;"></div>
                                                <div data-score="700" style="background-color:#90c53f;"></div>
                                                <div data-score="800" style="background-color:#18a94e;" class="last"></div>
                                            </div>
                                        </div>

                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="clear"></div>



                                <div class="clear"></div>


                            </div>

                            <div class="score_step_div">

                                <div style="color:#43b889; font-size: 16px;" class="score_tl">HOW TO GET YOUR CREDIT SCORE?</div>

                                <ul class="score_flow gray_gradiant">

                                    <li class="s_1">
                                        <img src="/credit/assets/images/img/ic_b_form.png" alt=""/>
                                        <div class="txt top_space"><span style="color:#666; font-size: 14px;">Login using Facebook</span></div>
                                        <div class="clear"></div>
                                    </li>

                                    <li class="s_2">
                                        <img src="/credit/assets/images/img/ic_b_payment.png" alt=""/>
                                        <div class="txt"><span style="color:#666; font-size: 14px;">Tell us about yourself</span></div>
                                        <div class="clear"></div>
                                    </li>

                                    <li class="s_6">
                                        <img src="/credit/assets/images/img/ic_b_authenticate.png" alt=""/>
                                        <div class="txt"><span style="color:#666; font-size: 14px;">Get your credit score</span></div>
                                        <div class="clear"></div>
                                    </li>

                                </ul>

                                <div class="clear"></div>
                                <a target="_blank" href=""><input type="button" alt="submit" value="Click here to Start!" class="ob_btn ui-button ui-widget ui-state-default ui-corner-all" role="button" aria-disabled="false"/></a>


                            </div>







                            <div class="clear"></div>
                            <div id="divTag">
                                <div class="form_area">
                                    <div class="form_tl" style="color:#43b889;">RedCarpet credit score request form</div>


                                    <div class="form_box gray_gradiant" style="margin-top:20px">



                                        <div class="form_subhead" style="color:#43b889;">1. I want to use a RedCarpet product</div>
                                        <form action="https://script.google.com/macros/s/AKfycbxyb9EQLiU35PF4DwWgcst6pQ9fRGg6sihbQREammztZ51RLO mA/exec" method="POST" id="gform">

                                            <ul class="select_score">


                                                <li><input type="radio" style="width:17px; height:17px;" name="rcp" isincontainer="true" class="text-field productType2" value="1" required/> RedCarpet app
                                                    <div class="clear"></div>
                                                </li>

                                                <li>
                                                    <input type="radio" style="width:17px; height:17px;" name="rcp" isincontainer="true" class="text-field productType3" value="2"/> Virtual Card
                                                    <div class="clear"></div>
                                                </li>

                                                <li>
                                                    <input type="radio" style="width:17px; height:17px;" name="rcp" isincontainer="true" class="text-field productType4" value="3"/> Physical Card
                                                    <div class="clear"></div>
                                                </li>

                                            </ul>


                                            <div class="clear"></div>
                                            <div class="bi_line" style="max-width:300px;"></div>
                                            <div class="clear"></div>

                                          

                                            <div class="second-form">



                                                <div class="form_subhead" style="color:#43b889;">2. Tell us about yourself</div>
                                                <div class="field_box equate">
                                                    <div class="field_name">Name</div>
                                                    <div class="field_input"><input type="text" name="name" maxlength="20" value="" id="name" required />
                                                    </div>
                                                </div>

                                                <div class="field_box equate">
                                                    <div class="field_name">Email</div>
                                                    <div class="field_input"><input type="email" name="email" maxlength="20" value="" id="email" required />
                                                    </div>
                                                </div>

                                                <div class="field_box equate">
                                                    <div class="field_name">Mobile No.</div>
                                                    <div class="field_input">
                                                        <input type="number" name="mobile" value="" id="mobile" maxlength="10" required />
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>



                                                <div class="clear"></div>
                                            </div>

                                            <div class="clear"></div>


                                            <div class="clear"></div>

                                            <div class="clear"></div>

                                            <div class="clear"></div>


                                            <input type="submit" alt="submit" name="submit" value="Submit" class="ob_btn" />
                                        </form>

                                      
                                        <div style="display:none;" id="thankyou_message">
                                            <h2><em>Thanks</em> for contacting us! We will get back to you soon!</h2>
                                        </div>

                                        <div class="clear"></div>

                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="clear"></div>


                    <div class="clear"></div>

                </div>

   </div>

     )}

export default CREDITSCORE