import React from 'react';

import {
    Container,
    View,
    Text
} from 'native-base';

export default class NotificationPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> Notification page </Text>
            </View>
        );
    }
};