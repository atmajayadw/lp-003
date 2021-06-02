import React, { Component } from 'react'
import Home from './pages/Home.js'
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </main>
        </BrowserRouter>
      </>
    )
  }
}
