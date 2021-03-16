import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../src/components/Home';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('Home', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  })

  test('contains the correct message', () => {
    const { queryByText } = render(<Home {...props}/>);
    expect(queryByText('Home screen')).not.toBeNull();
  });

  test('contains a button to publish message screen', () => {
    const { queryByText } = render(<Home {...props}/>);
    expect(queryByText('Publish message')).not.toBeNull();
  });
});
