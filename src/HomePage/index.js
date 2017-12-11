import React, { Component } from 'react';
import HomePageNavigator from './HomePageNavigator.js';
import Sidebar from '../Sidebar/Sidebar.js';
import SearchPage from './SearchPage.js';

import { 
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';

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

const StackRouter = StackNavigator({
    HomeStack: {
        screen: HomePageRouter,
        // navigationOptions: { title: 'Home Stack' }
    },
    Search: {
        screen: SearchPage
    }
},
    {
        headerMode: "none"
    }
)

// export default HomePageRouter;
export default StackRouter;