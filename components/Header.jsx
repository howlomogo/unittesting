import React, { Component } from 'react'

class Header extends Component {

  constructor () {
    super()
    this.changeActive = this.changeActive.bind(this)
    this.multiplyNumber = this.multiplyNumber.bind(this)
    this.testFunction = this.testFunction.bind(this)
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

  render() {

    return (
      <div>
        {/* <NavLink />
        <NavLink />
        <NavLink /> */}

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
