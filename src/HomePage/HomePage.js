import React from 'react';

import {
    Container,
    Content,
    View,
    Text,
    Header,
    Body,
    Title,
    Left,
    Button,
    Icon,
    Right
} from 'native-base';

export default class HomePage extends React.Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container style={{backgroundColor: 'white'}} >
                <Header hasTabs style={{ backgroundColor: "transparent"}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="person" style={{color: 'black'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}} > Home </Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <Text> Home Page </Text>
                </Content>
            </Container>
        );
    }
};