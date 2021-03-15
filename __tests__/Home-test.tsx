import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../src/components/Home';

describe('Home', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Home />);
    expect(queryByText('Home screen')).not.toBeNull();
  });
});
