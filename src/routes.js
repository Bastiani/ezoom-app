import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import DrawerMenu from './components/common/DrawerMenu';

import Home from './scenes/Home';
import Account from './scenes/Account';
import Signin from './scenes/Signin';
import Signup from './scenes/Signup';
import Products from './scenes/Products';

export const Routes = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      title: 'Account',
    },
  },
  Signin: {
    screen: Signin,
    navigationOptions: {
      title: 'Signin',
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
    },
  },
  Products: {
    screen: Products,
    navigationOptions: {
      title: 'Products',
    },
  },
};

export const createRootNavigator = () =>
  createDrawerNavigator(
    {
      ...Routes,
    },
    {
      initialRouteName: 'Home',
      contentComponent: props => <DrawerMenu {...props} />,
    }
  );
