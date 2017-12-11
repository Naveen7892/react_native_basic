import React from 'react';

import {
    Container,
    View,
    Text,
    Header,
    Item,
    Icon,
    Input,
    Button,
    Left,
    Right,
    Body,
    Title
} from 'native-base';

export default class SearchPage extends React.Component {

    // static navigationOptions = ({ navigation }) => ({
    //     header: (
    //       <Header>
    //         <Left>
    //           <Button transparent onPress={() => navigation.goBack()}>
    //             <Icon name="arrow-back" />
    //           </Button>
    //         </Left>
    //         <Body>
    //           <Title>Menu</Title>
    //         </Body>
    //         <Right />
    //       </Header>
    //     )
    //   });

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