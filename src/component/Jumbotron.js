import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return (
            <>
                <section id="jumbotron">
                    <div className="container jumbo">
                        <div className="caption">
                            <h4>Let us help you to</h4>
                            <h1>CHOOSE THE BEST</h1>
                        </div>

                        <div className="search">
                            <form className="search-form">
                                <div className="places">
                                    <label htmlFor="places">Looking for?</label>
                                    <br />
                                    <select id="place" name="place">
                                        <option value="Rent House">Rent House</option>
                                        <option value="Hotel">Hotel</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Resort">Resort</option>
                                    </select>
                                </div>

                                <div className="cities">
                                    <label htmlFor="cities">Which City?</label>
                                    <br />
                                    <select id="city" name="city">
                                        <option value="New York">New York</option>
                                        <option value="Jakarta">Jakarta</option>
                                        <option value="Tokyo">Tokyo</option>
                                        <option value="Seoul">Seoul</option>
                                    </select>
                                </div>

                                <div className="prices">
                                    <label htmlFor="prices">Range Price</label>
                                    <br />
                                    <select id="price" name="price">
                                        <option value="10-15K">10 - 15K</option>
                                        <option value="10-15K">16 - 20K</option>
                                        <option value="10-15K">21 - 25K</option>
                                        <option value="10-15K">26 - 30K</option>
                                    </select>
                                </div>
                            </form>

                            <div className="button-search">
                                <div className="btn btn-search">
                                    <span>SEARCH</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
