import React, { Component } from 'react';
import HomePage from './HomePage.js';
import Sidebar from '../Sidebar/Sidebar.js';
import { DrawerNavigator } from 'react-navigation';

const HomePageRouter = DrawerNavigator(
    {
        Home: {
            screen: HomePage
        }
    },
    {
        contentComponent: props => <Sidebar {...props} />
    }
);

export default HomePageRouter;