import React from "react";

export function Contact() {
    return (
        <div class="contact" id="contact">
            <div class="container">
                <div class="section-header">
                    <h3>Contact Me</h3>
                    <p>
                    I'm always open to discussing new opportunities and ideas.</p>
                </div>

                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="contact-info">
                            <p><i class="fa fa-user"></i>C Gagandeep</p>
                            <p><i class="fa fa-tag"></i>Web Designer & Developer</p>
                            <p><i class="fa fa-map-marker"></i>Malla Reddy University Hyderabad Telangana</p>
                            <p><i class="fa fa-envelope"></i><a href="mailto:gagandeep.pros@gmail.com">gagandeep.pros@gmail.com</a></p>
                            <p><i class="fa fa-phone"></i><a href="tel:91+9121891420">9121891420</a></p>
                            <div class="social">
                                <a href="https://www.instagram.com/gagan_stark_46/profilecard/?igsh=aG9qejNkcmNwMGpw"><i class="fa fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/gagandeep-chinthakunta-3a7190326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form">
                            <form action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="1f9b6369-b1d9-4b01-80ce-662d54bf6522" />
                                
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control" name="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
