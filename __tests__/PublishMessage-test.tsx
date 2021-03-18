import React from 'react';
import { render } from '@testing-library/react-native';
import PublishMessage from '../src/components/PublishMessage';
import { createTestProps, mockNavigation } from '../jest/TestUtils';

mockNavigation()

describe('Publish message screen', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  })
  
  test('contains the correct message', () => {
    const { queryByText } = render(<PublishMessage {...props}/>);
    expect(queryByText('Publish message screen')).not.toBeNull();
  });

  test('display name from props', () => {
    let props: any = createTestProps({name: "UserName"})
    const { queryByText } = render(<PublishMessage {...props}/>);
    expect(queryByText('Hello UserName')).not.toBeNull();
  });
});
