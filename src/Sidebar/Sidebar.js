import React from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text
} from 'native-base';

export default class Sidebar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Item Heading</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Item 1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Item 2</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Item 3</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Item 4</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Item 5</Text>
                        </ListItem>
                    </List>
                </Content>
                
            </Container>
        );
    }
};