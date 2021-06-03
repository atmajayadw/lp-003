import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
// import $ from 'jquery';
import Navbar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron.js'



export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Jumbotron />
            </>
        )
    }
}
