import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createTestProps, mockNavigation } from '../jest/TestUtils';

mockNavigation()

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

  test('pressing publish message button navigate to publish message screen', () => {
    const { queryByText, getByTestId } = render(<NavigationContainer><Home {...props}/></NavigationContainer>);
    const buttonToClick = getByTestId("Publish message button");

    expect(queryByText("Publish message screen")).toBeNull;
    fireEvent.press(buttonToClick);
    expect(queryByText("Publish message screen")).not.toBeNull;
  });
});
