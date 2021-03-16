import React from 'react';
import { Text, Button } from 'react-native';
import { RouteStackParamList } from '../params/Parameters';

const Home = ({navigation}:RouteStackParamList<"Home">) => (
  <>
    <Text>Home screen</Text>
    <Button title="Publish message" onPress={() => navigation.navigate("PublishMessage")} />
  </>
);

export default Home;
