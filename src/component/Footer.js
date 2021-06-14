import React, { Component } from 'react'
import { Logo, Social } from '../assets/icon/icons.js'

export default class Footer extends Component {
    render() {
        return (
            <>
                <section id="footer">
                    <hr />
                    <div className="container">
                        <div className="row footer">
                            <div className="col-md-2 one column">
                                <div className="logo">
                                    <img src={Logo} alt=""></img>
                                    <h4>PlaceTogether</h4>
                                </div>
                                <img src={Social} alt="" className="social"></img>
                            </div>
                            <div className="col-md-2 column">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li>- Home</li>
                                    <li>- About Us</li>
                                    <li>- Services</li>
                                    <li>- Testimonials</li>
                                    <li>- Contact Us</li>
                                </ul>
                            </div>
                            <div className="col-md-2 column">
                                <h5>Sitemap</h5>
                                <ul>
                                    <li>- Our Process</li>
                                    <li>- What we do</li>
                                    <li>- Location</li>
                                    <li>- Set</li>
                                    <li>- Purchases</li>
                                </ul>
                            </div>
                            <div className="col-md-2 column">
                                <h5>Discover</h5>
                                <ul>
                                    <li>- Privacy Policy</li>
                                    <li>- Terms {"&"} Condition</li>
                                    <li>- Owners</li>
                                    <li>- Houses</li>
                                </ul>
                            </div>
                            <div className="col-md-4 column">
                                <h5>Subscribe</h5>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text subscribe" id="basic-addon2">Subscribe</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <p>Copyright © 2019 Property Agent. All rights reserved. <br />
                        Designed by <a href="https://www.inkyy.com/property-booking-free-adobe-xd-template/">Inkyy</a></p>
                </section>
            </>
        )
    }
}
