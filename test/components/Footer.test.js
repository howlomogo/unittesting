import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from '../../components/Footer.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Footer Test', function() {
  it('Footer should contain Footer Text', function() {
    const wrapper = shallow(<Footer />);
    const heading = wrapper.find('h1').text()
    console.log(wrapper.debug())
    expect(wrapper.text()).to.equal('Footer')
  })
})
