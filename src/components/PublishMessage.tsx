import React, { FC } from 'react';
import { Text } from 'react-native';
import { RootStackParamList } from '../params/Parameters';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type PublishScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PublishMessage'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'PublishMessage'>;
type Props = {
  navigation: PublishScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const PublishMessage : FC<Props> = (props) => {
  return (<>
    <Text>Publish message screen</Text>
    <Text>Hello {props.route.params.name}</Text>
  </>);
}

export default PublishMessage;
