import React from 'react';

import {
    Container,
    Content,
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
    Title,
    Footer
} from 'native-base';

import {
    Image
} from 'react-native';

import Icon_2 from 'react-native-vector-icons/FontAwesome';

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

        //     <Container>
        //     <Header searchBar rounded>
        //         <Item onPress={() => this.props.navigation.navigate("Home")}>
        //             {/* <Icon name="ios-search" /> */}
        //             <Icon name="arrow-back" />
        //             <Input placeholder="Search Twitter" />
        //             {/* <Icon name="ios-people" /> */}
        //         </Item>
        //         <Button transparent>
        //             <Text>Search</Text>
        //         </Button>
        //     </Header>
        // </Container>

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

                <Content padder>
                    <Text> Search Page </Text>
                </Content>

                <Footer style={{backgroundColor: 'transparent'}}>
                    <Left>
                        <Button transparent style={{paddingLeft: 10}}>
                            <Icon_2 name='moon-o' size={24} />
                        </Button>
                    </Left>
                    <Body>
                        <Text> </Text>
                    </Body>
                    <Right>
                        <Button transparent style={{paddingRight: 10}}>
                            <Icon_2 name='qrcode' size={24} />
                        </Button>
                    </Right>
                </Footer>
            </Container>
        );
    }
};