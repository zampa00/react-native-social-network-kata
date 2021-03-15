import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../src/components/Home';

describe('Home', () => {
  test('contains the correct message', () => {
    const {queryByText} = render(<Home />);
    expect(queryByText('Publish message')).not.toBeNull();
  });
});
