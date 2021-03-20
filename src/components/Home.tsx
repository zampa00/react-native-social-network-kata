import React, { FC, useState } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../params/Parameters';
import { TextInput } from 'react-native-gesture-handler';

type PublishScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type Props = {
  navigation: PublishScreenNavigationProp;
}

const Home : FC<Props> = (props) => {
  const [username, onChangeUsername] = useState<string|null>(null);

  const isUsernameEmpty = () => username == null || username.length === 0;

  return (<>
    <Text>Home screen</Text>
    <TextInput placeholder={"Username"} onChangeText={onChangeUsername} testID="Name input" />
    <Button title="Publish message" disabled={isUsernameEmpty()} onPress={() => props.navigation.navigate("PublishMessage", {name: username || "User"})} testID="Publish message button" />
  </>);
}

export default Home;
