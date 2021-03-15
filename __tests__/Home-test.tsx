import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../src/components/Home';

describe('Home', () => {
  test('contains the correct message', () => {
    const {queryByText} = render(<Home />);
    expect(queryByText('Home screen')).not.toBeNull();
  });

  test('contains a button to publish message screen', () => {
    const {queryByText} = render(<Home />);
    expect(queryByText('Publish message')).not.toBeNull();
  });
});
