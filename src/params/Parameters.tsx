import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RouteParamList = {
  Home: undefined,
  PublishMessage: undefined,
}

export type RouteStackParamList<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T>;
  route: RouteProp<RouteParamList, T>;
}
