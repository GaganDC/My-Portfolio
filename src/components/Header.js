import img1 from '../img/profile-pic.jpg';
import React from 'react';

export function Header(){
    return(
        <div class="top-header" id="top-header">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                    <img src={img1} alt="pic" />
                </div>

                <div class="col-md-12">
                    <h1>I'm Gagandeep</h1>
                </div>

                <div class="col-md-12 ">
                    <p>Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</p>
                
                    <span className='typed-cursor'>|</span>
                </div>
            </div>
        </div>
    </div>
    )
}