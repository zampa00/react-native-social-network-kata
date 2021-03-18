/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Home from '../src/components/Home';
import { createTestProps, mockNavigation } from '../jest/TestUtils';

mockNavigation()

it('renders correctly', () => {
  let props: any = createTestProps({});
  renderer.create(<Home {...props}/>);
});
