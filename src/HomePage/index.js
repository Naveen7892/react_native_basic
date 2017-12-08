import React, { Component } from 'react';
import HomePageNavigator from './HomePageNavigator.js';
import Sidebar from '../Sidebar/Sidebar.js';
import { DrawerNavigator } from 'react-navigation';

const HomePageRouter = DrawerNavigator(
    {
        HomeNavigator: {
            screen: HomePageNavigator
        }
    },
    {
        contentComponent: props => <Sidebar {...props} />
    }
);

export default HomePageRouter;