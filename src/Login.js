import React from 'react';
import {Dimensions, TouchableOpacity, Animated, Easing} from 'react-native';
import {View, Text, Container, Content, Item, Button, Input, Thumbnail, Card, CardItem, Body} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      fadeValue: new Animated.Value(0),
      yValue: {
          logo: new Animated.Value(-200),
          login: new Animated.Value(-100),
      },
      xValue: {
        email: new Animated.Value(-width),
        password: new Animated.Value(-width),
        button: new Animated.Value(-width),
      },
      springValue: new Animated.Value(0.8),
    };
  }

  componentDidMount() {
    this.transformAnim();
  }

  springValue = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  animConfig = (toValue, duration, easing) => {
    return {
      toValue: toValue,
      duration: duration,
      easing: easing
    }
  }

  transformAnim = () => {
    const anims = [
      {
        value: this.state.xValue.email,
        properties: this.animConfig(0, 300, Easing.cubic) 
      }, {
        value: this.state.xValue.password,
        properties: this.animConfig(0, 300, Easing.cubic) 
      }, {
        value: this.state.xValue.button,
        properties: this.animConfig(0, 300, Easing.cubic) 
      }
    ];
    Animated.timing(this.state.yValue.logo, this.animConfig(0, 900, Easing.cubic)).start(() => this.springValue());
    Animated.timing(this.state.yValue.login, this.animConfig(0, 900, Easing.cubic)).start();
    Animated.sequence(
      anims.map((element, index) => 
        Animated.timing(element.value, element.properties)
      )
    ).start();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Animated.Image source={require("../assets/logo.png")} style={[{width: 200, height: 200}, {top: this.state.yValue.logo}, {transform: [{scale: this.state.springValue}], alignSelf: 'center'}]}/>
          <Animated.View style={[{width: '100%',}, {left: this.state.xValue.email}]}>
            <Item style={{borderColor: "#D9534F", paddingHorizontal: 15, marginLeft: 15, marginRight: 15, marginTop: 15}} rounded>
              <Ionicons name='ios-person' size={25} />
              <Input placeholder=' Email: '/>
            </Item>
          </Animated.View>
          <Animated.View style={[{width: '100%',}, {right: this.state.xValue.password}]}>
            <Item style={{borderColor: "#D9534F", paddingHorizontal: 15, marginLeft: 15, marginRight: 15,marginTop: 15}} rounded>
              <Ionicons name='ios-key' size={25} />
              <Input placeholder=' Password: '/>
            </Item>
          </Animated.View>
          <Animated.View style={[{width: '100%',}, {left: this.state.xValue.button}]}>
            <Button full danger rounded style={{marginTop: 15, marginHorizontal: 15}}>
              <Text>Sign in</Text>
            </Button>
          </Animated.View>
        </Content>
        <Animated.View style={[{marginBottom: 25, alignItems: 'center', justifyContent: 'center'}, {bottom: this.state.yValue.login}]}>
          <Text>Don't have an account?</Text>
          <Button transparent danger full>
            <Text>Create one</Text>
          </Button>
        </Animated.View> 
      </Container>
    )
  }
}