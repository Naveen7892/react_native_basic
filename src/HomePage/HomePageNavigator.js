import React, { Component } from 'react';

import {
    Button,
    Text,
    Icon,
    Container,
    Header,
    Left,
    Right,
    // HeaderTab
    Footer,
    FooterTab
} from 'native-base';

import { TabNavigator } from 'react-navigation';

import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import NotificationPage from './NotificationPage.js';
import MailPage from './MailPage.js';

// export default class HomePage extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text> Home Page </Text>
//             </View>
//         );
//     }
// };

export default (HomePageNavigator = TabNavigator(
    {
        Home: {
            screen: HomePage
        },
        Search: {
            screen: SearchPage
        },
        Notification: {
            screen: NotificationPage
        },
        Mail: {
            screen: MailPage
        }
    },
    {
        tabBarPosition: "top",
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("Home")}
                        >
                            <Icon name="bowtie" />
                            {/* <Text>Home</Text> */}
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("Search")}
                        >
                            <Icon name="briefcase" />
                            {/* <Text>Search</Text> */}
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("Notification")}
                        >
                            <Icon name="headset" />
                            {/* <Text>Notification</Text> */}
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 3}
                            onPress={() => props.navigation.navigate("Mail")}
                        >
                            <Icon name="headset" />
                            {/* <Text>Mail</Text> */}
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    }   
))