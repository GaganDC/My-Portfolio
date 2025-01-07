import React from "react";
import img2 from '../img/profile-pic.jpeg'

export function Aboutme(){
    
    return(
        <div class="about" id="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 col-lg-4">
                    <img class="img-fluid" src={img2}alt="abut me" />
                </div>

                <div class="col-md-6 col-lg-8">
                    <header class="section-header">
                        <h2>About Me</h2>
                    </header>
                    <h3><strong>Name:</strong>C.Gagandeep</h3>
                    <h4><strong>Profession:</strong> Web Designer & Developer</h4>
                    I am C. Gagandeep, a student at Malla Reddy University,Hyderabad,originally from Jadcherla,Mahabubnagar,Telangana. With a strong passion for web design and development,I am currently working on two exciting projects: one focused on web evaluation and another on creating a resume builder.I thrive on creating responsive, visually engaging websites that deliver exceptional user experiences.Exploring modern web technologies and solving challenges creatively drives my enthusiasm.I am committed to continuous learning and aspire to contribute meaningfully to the ever-evolving field of web development
                    <br></br>
                    <a href="https://linkedin.com">Hire Me</a>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="skills">
                        <h3>Front End Skills</h3>
                        <div class="skill-name">
                            <p>HTML</p><p>85%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}></div>
                        </div>
                        
                        <div class="skill-name">
                            <p>CSS</p><p>85%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
                        </div>
                        
                        <div class="skill-name">
                            <p>javascript</p><p>80%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="skills">
                        <h3>Back End Skills</h3>
                        <div class="skill-name">
                            <p>PHP</p><p>30%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}></div>
                        </div>
                        <div class="skill-name">
                            <p>MongoDb</p><p>60%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}></div>
                        </div>
                      
                      
                        
                        <div class="skill-name">
                            <p>MySQL</p><p>50%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}