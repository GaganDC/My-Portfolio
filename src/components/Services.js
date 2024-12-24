import React from "react";

export function Service(){
    return(
        <div class="services" id="services">
        <div class="container">
            <header class="section-header">
                <h3>My Services</h3>
                <p>
                I offer responsive web design and front-end development services, creating visually appealing and user-friendly websites. With a focus on modern technologies and best practices, I aim to deliver solutions tailored to user needs</p>
            </header>
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="single-service">
                        <span></span>
                        <div class="service-icon"><i class="fa fa-television"></i></div>
                        <h4><a href="https://linkedin.com">Web Design</a></h4>
                        <p>Crafting visually stunning and web designs for seamless online experiences.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="single-service">
                        <span></span>
                        <div class="service-icon"> <i class="fa fa-laptop"></i> </div>
                        <h4><a href="https://linkedin.com">Web Development</a></h4>
                        <p>Building responsive and efficient websites that bring ideas to life on the web.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="single-service">
                        <span></span>
                        <div class="service-icon"> <i class="fa fa-android"></i> </div>
                        <h4><a href="https://linkedin.com">Apps Development</a></h4>
                        <p>Crafting seamless and user-friendly mobile applications for a better digital experience.</p>
                    </div>
                </div>
                
               
              
            </div>
        </div>
    </div>
    )
}