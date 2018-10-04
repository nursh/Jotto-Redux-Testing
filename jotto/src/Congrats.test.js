import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../tests/testutils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test('renders without error', () => {

});

test('renders no text when `success` prop is false', () => {

});

test('renders non-empty congrats message when `success` props is true', () => {

});

// Don't test for specific test incase someone changes it