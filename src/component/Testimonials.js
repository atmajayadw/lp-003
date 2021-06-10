import React, { Component } from 'react'
import { Profile } from '../assets/icon/icons.js'

export default class Testimonials extends Component {
    render() {
        return (
            <>
                <section id="testimonials">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 testimonials">
                                <div className="title">
                                    <h3>Client Testimonials</h3>
                                </div>
                                <div className="testi">
                                    <img src={Profile} className="img-fluid" alt="" />
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                                    <div className="profile">
                                        <h5>{"-"} John Doe</h5>
                                        <p>ABC Company</p>
                                    </div>
                                </div>

                                <div className="btn btn-view">
                                    View All {"->"}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
