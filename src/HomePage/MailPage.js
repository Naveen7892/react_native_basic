import React from 'react';

import {
    Container,
    View,
    Text
} from 'native-base';

export default class MailPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> Mail page </Text>
            </View>
        );
    }
};