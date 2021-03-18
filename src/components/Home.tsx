import React, { FC } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../params/Parameters';

type PublishScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type Props = {
  navigation: PublishScreenNavigationProp;
}

const Home : FC<Props> = (props) => {
  return (<>
    <Text>Home screen</Text>
    <Button title="Publish message" onPress={() => props.navigation.navigate("PublishMessage", {name: "Marco"})} testID="Publish message button" />
  </>);
}

export default Home;
