import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Base from '../../containers/Base.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Base Component', function() {
  let wrapper
  beforeEach(function() {
    wrapper = shallow(<Base />);
  })

  it('should render a Header Component', function() {
    expect(wrapper.find(Header).exists()).to.equal(true);
  })

  it('with the prop of testArr equaling ["one", "two", "three"]', function() {
    expect(wrapper.find(Header).props().testArr).to.have.all.members(['one', 'two', 'three'])
  })

  it('with the prop of testNumber equaling 7', function() {
    expect(wrapper.find(Header).props().testNumber).to.equal(7)
  })

  it('should render a Footer Component', function() {
    expect(wrapper.find(Footer).exists()).to.equal(true);
  })
})
