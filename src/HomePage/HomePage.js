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
    Right,
    Footer
} from 'native-base';

import {
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomePage extends React.Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container style={{backgroundColor: 'white', flex: 1}} >
                {/* <Header hasTabs style={{ backgroundColor: "transparent"}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="person" style={{color: 'black'}} />
                            
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}} > Home </Title>
                    </Body>
                    <Right />
                </Header> */}

                <Content padder>
                    <Text> Home Page </Text>
                </Content>

                <Footer style={{backgroundColor: 'transparent'}}>
                    <Left>
                        <Button transparent style={{paddingLeft: 10}}>
                            <Icon name='moon-o' size={24} />
                        </Button>
                    </Left>
                    <Body>
                        <Text> </Text>
                    </Body>
                    <Right>
                        <Button transparent style={{paddingRight: 10}}>
                            <Icon name='qrcode' size={24} />
                        </Button>
                    </Right>
                </Footer>
            </Container>
        );
    }
};