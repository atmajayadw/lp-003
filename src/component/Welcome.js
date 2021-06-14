import React, { Component } from 'react'
import { Buyers, Seller, Agent } from '../assets/img/images.js'
import $ from 'jquery';
export default class Welcome extends Component {

    componentDidMount() {
        window.addEventListener("scroll", this.showWelcome);
    }

    showWelcome = () => {
        const wScroll = $(window).scrollTop();
        if ($('#welcome').length) {
            if (wScroll > $('#welcome').offset().top - 100) {
                $('.welcome .box').each(function (i) {
                    setTimeout(function () {
                        $('.welcome .box').eq(i).addClass('show');
                    }, 400 * (i + 1));
                });
            }
        }
    }

    render() {
        return (
            <>
                <section id="welcome">
                    <div className="container welcome">
                        <div className="row">

                            <div className="col-md-6 welcome-left">

                                <div className="boxes-one">
                                    <div className="box">
                                        <img src={Agent} className="img-fluid" alt="" />
                                        <div className="caption">
                                            <h5 className="title">Agents</h5>
                                            <p>Lorem ipsum dolor sit Stet  kas no sea taki mata.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="boxes-two">
                                    <div className="box">
                                        <img src={Buyers} className="img-fluid" alt="" />
                                        <div className="caption">
                                            <h5 className="title">Buyers</h5>
                                            <p>Lorem ipsum dolor sit Stet  kas no sea taki mata.</p>
                                        </div>
                                    </div>

                                    <div className="box">
                                        <img src={Seller} className="img-fluid" alt="" />
                                        <div className="caption">
                                            <h5 className="title">Sellers</h5>
                                            <p>Lorem ipsum dolor sit Stet  kas no sea taki mata.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 welcome-right">
                                <div className="title">
                                    <h2>WELCOME TO <br />PROPERTY AGENT</h2>
                                </div>
                                <hr />
                                <div className="caption">
                                    <p>Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the lorem ipsum dolor sit amet. sed diam nonumy  ut labore et dolore s the magna aliquyam.
                                    </p>
                                    <br />
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt eque porro quisquam.
                                    </p>

                                </div>
                                <div className="btn btn-detail">
                                    <span>More Detail {"->"} </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
