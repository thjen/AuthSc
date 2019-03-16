import React from 'react';
import {View, Text, Container, Content, Item, Button, Input, Thumbnail} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Thumbnail source={require("../assets/logo.png")} style={{width: 200, height: 200}}/>
          <Item style={{borderColor: "#D9534F", paddingHorizontal: 15, marginLeft: 15, marginRight: 15, marginTop: 15}} rounded>
            <Ionicons name='ios-person' size={25} />
            <Input placeholder=' Email: '/>
          </Item>
          <Item style={{borderColor: "#D9534F", paddingHorizontal: 15, marginLeft: 15, marginRight: 15,marginTop: 15}} rounded>
            <Ionicons name='ios-key' size={25} />
            <Input placeholder=' Password: '/>
          </Item>
          <Button full danger rounded style={{marginTop: 15, marginHorizontal: 15}}>
            <Text>Sign in</Text>
          </Button>
        </Content>
        <View style={{marginBottom: 25, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Don't have an account?</Text>
          <Button transparent danger full>
            <Text>Create one</Text>
          </Button>
        </View> 
      </Container>
    )
  }
}