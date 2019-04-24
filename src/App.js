import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreenView from './modules/core/homeScreen/HomeScreenView';
import DetailsScreenView from './modules/core/detailsScreen/DetailsScreenView';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreenView,
    },
    Details: {
      screen: DetailsScreenView,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'card',
  },
);


const AppContainer = createAppContainer(RootStack);

export const App = () => <AppContainer />;
