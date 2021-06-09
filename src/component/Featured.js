import React, { Component } from 'react'
import { Feature1, Feature2, Feature3, Feature4, Feature5, Feature6 } from '../assets/img/images.js'
import { Bed, Bath } from '../assets/icon/icons.js'
import $ from 'jquery';

export default class Featured extends Component {

    componentDidMount() {
        this.filterElement();
    }

    filterElement = () => {
        var $element = $('#featured .box');

        $('.filter_link').click(function (e) {
            e.preventDefault();
            var filterVal = $(this).data('filter');

            if (filterVal === 'all') {
                $element.show();
            } else {
                $element.hide().filter('.' + filterVal).show();
            }
        });
    }

    render() {
        return (
            <>
                <section id="featured">
                    <div className="container featured">
                        <div className="title">
                            <h3>FEATURED HOMES</h3>
                        </div>
                        <hr />
                        <div className="caption">
                            <p>Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the lorem ipsum dolor sit amet. sed diam nonumy  ut labore et dolore s the magna aliquyam.</p>
                        </div>
                        <div className="filter">
                            <p href="" className="filter_link" data-filter="all">All</p>
                            <p href="" className="filter_link" data-filter="rent">Rent</p>
                            <p href="" className="filter_link" data-filter="sell">Sell</p>
                            <p href="" className="filter_link" data-filter="buy">Buy</p>
                        </div>
                        <div className="boxes">
                            <div className="box rent">
                                <img src={Feature1} className="img-fluid" alt="" />
                                <div className="title">
                                    <p>Fulton Street, Apt P101, New York</p>
                                </div>
                                <div className="features">
                                    <div className="feature bed">
                                        <img src={Bed} className="img-fluid" alt="" />
                                        <span>2bd</span>
                                    </div>
                                    <div className="feature bath">
                                        <img src={Bath} className="img-fluid" alt="" />
                                        <span>2ba</span>
                                    </div>
                                    <div className="btn btn-price">$6,500</div>
                                </div>
                            </div>

                            <div className="box rent">
                                <img src={Feature2} className="img-fluid" alt="" />
                                <div className="title">
                                    <p>Fulton Street, Apt P101, New York</p>
                                </div>
                                <div className="features">
                                    <div className="feature bed">
                                        <img src={Bed} className="img-fluid" alt="" />
                                        <span>2bd</span>
                                    </div>
                                    <div className="feature bath">
                                        <img src={Bath} className="img-fluid" alt="" />
                                        <span>2ba</span>
                                    </div>
                                    <div className="btn btn-price">$6,500</div>
                                </div>
                            </div>

                            <div className="box sell">
                                <img src={Feature3} className="img-fluid" alt="" />
                                <div className="title">
                                    <p>Fulton Street, Apt P101, New York</p>
                                </div>
                                <div className="features">
                                    <div className="feature bed">
                                        <img src={Bed} className="img-fluid" alt="" />
                                        <span>2bd</span>
                                    </div>
                                    <div className="feature bath">
                                        <img src={Bath} className="img-fluid" alt="" />
                                        <span>2ba</span>
                                    </div>
                                    <div className="btn btn-price">$6,500</div>
                                </div>
                            </div>

                            <div className="box rent">
                                <img src={Feature4} className="img-fluid" alt="" />
                                <div className="title">
                                    <p>Fulton Street, Apt P101, New York</p>
                                </div>
                                <div className="features">
                                    <div className="feature bed">
                                        <img src={Bed} className="img-fluid" alt="" />
                                        <span>2bd</span>
                                    </div>
                                    <div className="feature bath">
                                        <img src={Bath} className="img-fluid" alt="" />
                                        <span>2ba</span>
                                    </div>
                                    <div className="btn btn-price">$6,500</div>
                                </div>
                            </div>

                            <div className="box sell">
                                <img src={Feature5} className="img-fluid" alt="" />
                                <div className="title">
                                    <p>Fulton Street, Apt P101, New York</p>
                                </div>
                                <div className="features">
                                    <div className="feature bed">
                                        <img src={Bed} className="img-fluid" alt="" />
                                        <span>2bd</span>
                                    </div>
                                    <div className="feature bath">
                                        <img src={Bath} className="img-fluid" alt="" />
                                        <span>2ba</span>
                                    </div>
                                    <div className="btn btn-price">$6,500</div>
                                </div>
                            </div>

                            <div className="box buy">
                                <img src={Feature6} className="img-fluid" alt="" />
                                <div className="title">
                                    <p>Fulton Street, Apt P101, New York</p>
                                </div>
                                <div className="features">
                                    <div className="feature bed">
                                        <img src={Bed} className="img-fluid" alt="" />
                                        <span>2bd</span>
                                    </div>
                                    <div className="feature bath">
                                        <img src={Bath} className="img-fluid" alt="" />
                                        <span>2ba</span>
                                    </div>
                                    <div className="btn btn-price">$6,500</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
