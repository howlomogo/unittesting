import React, { Component } from 'react'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

class Base extends Component {
  constructor() {
    super()
    this.state = {
      testArr: ['one', 'two', 'three'],
      testNumber: 7
    }
  }

  testFunction() {

  }

  render() {
    return (
      <div>
        <Header
          testArr={this.state.testArr}
          testNumber={this.state.testNumber}
        />
        <Footer />
      </div>
    )
  }
}

export default Base
