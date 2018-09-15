import React, { Component } from 'react'

class Header extends Component {

  constructor () {
    super()
    this.changeActive = this.changeActive.bind(this)
    this.multiplyNumber = this.multiplyNumber.bind(this)
    this.testFunction = this.testFunction.bind(this)
    this.buttonClick1 = this.buttonClick1.bind(this)
    this.buttonClick2 = this.buttonClick2.bind(this)

    this.state = {
      numOfClicks: 0
    }
  }

  changeActive() {
    console.log('changeActive')
  }

  multiplyNumber(number1, number2) {
    return number1 * number2
  }

  testFunction(foo = true) {
    return foo
  }

  buttonClick1() {
    // Do something
  }

  buttonClick2() {
    this.setState({
      numOfClicks: this.state.numOfClicks + 1
    })
  }

  render() {

    return (
      <div>
        {/* <NavLink />
        <NavLink />
        <NavLink /> */}

        <button className='btn1' onClick={this.buttonClick1}>
          Click Me!
        </button>

        <button className='btn2' onClick={this.buttonClick2}>
          Click Me 2!
        </button>

        <ul className='nav-bar'>
          <li onClick={this.changeActive}>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    )
  }
}

export default Header
