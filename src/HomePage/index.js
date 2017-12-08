import React, { Component } from 'react';
import HomePage from './HomePageNavigator.js';
import Sidebar from '../Sidebar/Sidebar.js';
import { DrawerNavigator } from 'react-navigation';

const HomePageRouter = DrawerNavigator(
    {
        Home: {
            screen: HomePageNavigator
        }
    },
    {
        contentComponent: props => <Sidebar {...props} />
    }
);

export default HomePageRouter;