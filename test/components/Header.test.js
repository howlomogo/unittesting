import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Header from '../../components/Header.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Header Test', function() {
  let wrapper;
  let sandbox = sinon.sandbox.create();
  let spyButton1Click

  beforeEach(function() {
    // create a spy to listen for the calledOnce
    // Alternatively this could be added to the parent describe
    // Which means we wouldn't "need" to restore the sandbox after each test
    spyButton1Click = sandbox.spy(Header.prototype, 'buttonClick1');
    wrapper = shallow(<Header />);
  })

  afterEach(function() {
    sandbox.restore(); // Restore the sandbox
  })

  it('.nav-bar should have 3 child <li>', function() {
    // console.log(wrapper.debug())
    expect(wrapper.find('.nav-bar').children()).to.have.lengthOf(3)
  })

  it('should have the function multiplyNumber', function() {
    expect(wrapper.instance().multiplyNumber).to.be.a('function')
  })

  it('Passing in two numbers to multiplyNumber should multiply them together and return the correct result', function() {
    expect(wrapper.instance().multiplyNumber(2, 4)).to.equal(8)
  })

  it('testFunction should return false', function() {
    expect(wrapper.instance().testFunction()).to.equal(true)
  })

  // Simulate button click 1
  it('simulate a button click', function() {
    wrapper.find('.btn1').simulate('click');
    expect(spyButton1Click.calledOnce).to.equal(true)
  })

  // Simulate button click 2
  it('Clicking Button 2 3 times should set numOfClicks state to 3', function() {
    wrapper.find('.btn2').simulate('click');
    wrapper.find('.btn2').simulate('click');
    wrapper.find('.btn2').simulate('click');

    expect(wrapper.instance().state.numOfClicks).to.equal(3)
  })
})
