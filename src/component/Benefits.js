import React, { Component } from 'react'
import { Time, Target, Support } from '../assets/icon/icons.js'
import $ from 'jquery';
export default class Benefits extends Component {

    componentDidMount() {
        window.addEventListener("scroll", this.showBenefits);
        window.addEventListener("scroll", this.showCaption);
        window.addEventListener("scroll", this.showTitle);
    }

    showBenefits = () => {
        const wScroll = $(window).scrollTop();
        if ($('#benefits').length) {
            if (wScroll > $('#benefits').offset().top - 100) {
                $('.benefits .box').each(function (i) {
                    setTimeout(function () {
                        $('.benefits .box').eq(i).addClass('show');
                    }, 400 * (i + 1));
                });
            }
        }
    }

    showCaption = () => {
        const wScroll = $(window).scrollTop();
        if ($('#benefits').length) {
            if (wScroll > $('#benefits').offset().top - 100) {
                setTimeout(function () {
                    $('#benefits .benefits-left').addClass("show");
                }, 2000);
            }
        }
    }

    showTitle = () => {
        const wScroll = $(window).scrollTop();
        if ($('#benefits').length) {
            if (wScroll > $('#benefits').offset().top - 200) {
                $('#benefits .title-head').addClass("show");
            }
        }
    }

    render() {
        return (
            <>
                <section id="benefits">
                    <div className="container benefits">
                        <div className="title-head">
                            <h3>Features {"&"} Benefits</h3>
                        </div>

                        <div className="row">
                            <div className="col-md-6 benefits-left">
                                <div className="title">
                                    <h5>This is how we<br />
                                        Streamline our Process</h5>
                                </div>
                                <div className="caption">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> <br />totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 benefits-right">
                                <div className="boxes-one">

                                    <div className="box">
                                        <img src={Time} className="img-fluid" alt="" />
                                        <h5>Time Efficient</h5>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem ab illo  veritatis et quasi.</p>
                                    </div>

                                    <div className="box">
                                        <img src={Support} className="img-fluid" alt="" />
                                        <h5>Support Team</h5>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem ab illo  veritatis et quasi.</p>
                                    </div>
                                </div>

                                <div className="boxes-two">
                                    <div className="box">
                                        <img src={Target} className="img-fluid" alt="" />
                                        <h5>Target The Best</h5>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem ab illo  veritatis et quasi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
