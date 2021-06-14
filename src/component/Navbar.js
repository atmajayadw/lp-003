import React, { Component } from 'react'
import { Logo } from '../assets/icon/icons.js'
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery';

export default class Navbar extends Component {

    componentDidMount() {
        this.hamburger();
        window.addEventListener("scroll", this.stickyNavbar);
    }

    hamburger = () => {
        const hamburger = document.querySelector('.hamburger');
        const span = document.querySelectorAll('.hamburger span');
        const sidebar = document.querySelector('.sidebar .links');

        hamburger.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            span[0].classList.toggle('show1');
            span[1].classList.toggle('show2');
            span[2].classList.toggle('show3');
            if (sidebar.classList.contains('active')) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });
    }

    stickyNavbar = () => {
        const fixbar = $('#navbar');

        if (fixbar.length) {
            if ($(document).scrollTop() > 20) {
                fixbar.addClass("fixed");
            } else {
                fixbar.removeClass("fixed");
            }
        }
    }

    render() {
        return (
            <>
                <section id="navbar">
                    <div className="container position-relative">
                        <div className="row navbar">
                            <div className="logo">
                                <img src={Logo} alt=""></img>
                                <span>PlaceTogether</span>
                            </div>

                            <div className="links">
                                <ul>
                                    <li>
                                        <Link className="link home" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#home"
                                            }} data-section="#home"> <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link about" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#about"
                                            }} data-section="#about"> <span>About Us</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link services" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#services"
                                            }} data-section="#services"> <span>Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link testimonials" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#testimonials"
                                            }} data-section="#testimonials"> <span>Testimonials</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link contact" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#contact"
                                            }} data-section="#contact"> <span>Contact Us</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link call" rel="noopenner noreferrer"
                                            to={{
                                                pathname: "/",
                                                params: "#call"
                                            }} data-section="#call">
                                            <div className="btn btn-call">
                                                <span>
                                                    +123 456 789
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="sidebar">
                                <div className="hamburger">
                                    <span className="line1"></span>
                                    <span className="line2"></span>
                                    <span className="line3"></span>
                                </div>

                                <div className="links">
                                    <ul>
                                        <li>
                                            <Link className="link home" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#home"
                                                }} data-section="#home"> <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="link about" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#about"
                                                }} data-section="#about"> <span>About Us</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="link services" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#services"
                                                }} data-section="#services"> <span>Services</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="link testimonials" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#testimonials"
                                                }} data-section="#testimonials"> <span>Testimonials</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="link contact" rel="noopenner noreferrer"
                                                to={{
                                                    pathname: "/",
                                                    params: "#contact"
                                                }} data-section="#contact"> <span>Contact Us</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>



                        </div>
                    </div>

                    <div className="container">
                        <hr className="horizontal-line" />
                    </div>
                </section>

            </>
        )
    }
}
