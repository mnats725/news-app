import 'react-native';
import React from 'react';
import App from '../App';
import { it } from '@jest/globals';
import renderer from 'react-test-renderer';

it('renders App correctly', () => {
  renderer.create(<App />);
});
