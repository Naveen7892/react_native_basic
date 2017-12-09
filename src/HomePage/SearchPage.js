import React from 'react';

import {
    Container,
    View,
    Text,
    Header,
    Item,
    Icon,
    Input,
    Button
} from 'native-base';

export default class SearchPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            // <View>
            //     <Text> Search page </Text>
            // </View>
            <Container>
                <Header searchBar rounded>
                    <Item onPress={() => this.props.navigation.navigate("Home")}>
                        {/* <Icon name="ios-search" /> */}
                        <Icon name="arrow-back" />
                        <Input placeholder="Search Twitter" />
                        {/* <Icon name="ios-people" /> */}
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </Container>
        );
    }
};