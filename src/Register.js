import React from 'react';
import {Dimensions, TouchableOpacity, Animated, Easing} from 'react-native';
import {View, Text, Container, Content, Item, Button, Input, Thumbnail, Card, CardItem, Body} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      yValue: {
          logo: new Animated.Value(-200),
          login: new Animated.Value(-100),
      },
      xValue: {
        email: new Animated.Value(-width),
        password: new Animated.Value(-width),
        gender: new Animated.Value(-width),
        birthday: new Animated.Value(-width),
        phone: new Animated.Value(-width),
        button: new Animated.Value(-width),
      }
    };
  }

  componentDidMount() {
    this.transformAnim();
  }

  animConfig = (toValue, duration, easing) => {
    return {
      toValue: toValue,
      duration: duration,
      easing: easing
    }
  }

  transformAnim = () => {
    const {email, password, gender, phone, birthday, button} = this.state.xValue;
    const anims = [email, password, phone, gender, birthday, button];
    Animated.timing(this.state.yValue.logo, this.animConfig(0, 600, Easing.cubic)).start();
    Animated.timing(this.state.yValue.login, this.animConfig(0, 600, Easing.cubic)).start();
    Animated.sequence(
      anims.map(el => 
        Animated.timing(el, this.animConfig(0, 100, Easing.cubic)),
      )
    ).start();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Animated.View style={[{top: this.state.yValue.logo}, {marginBottom: 70}]}><Text style={{fontSize: 25, fontWeight: 'bold', color: "#d9534f"}}>Create account</Text></Animated.View>
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
          <Animated.View style={[{width: '100%',}, {left: this.state.xValue.phone}]}>
            <Item style={{borderColor: "#D9534F", paddingHorizontal: 15, marginLeft: 15, marginRight: 15,marginTop: 15}} rounded>
              <Ionicons name='ios-phone-portrait' size={25} />
              <Input placeholder=' Phone number: '/>
            </Item>
          </Animated.View>
          <Animated.View style={[{width: '100%',}, {right: this.state.xValue.gender}]}>
            <Item style={{borderColor: "#D9534F", paddingHorizontal: 15, marginLeft: 15, marginRight: 15,marginTop: 15}} rounded>
              <Ionicons name='ios-transgender' size={25} />
              <Input placeholder=' Gender: '/>
            </Item>
          </Animated.View>
          <Animated.View style={[{width: '100%',}, {left: this.state.xValue.birthday}]}>
            <Item style={{borderColor: "#D9534F", paddingHorizontal: 15, marginLeft: 15, marginRight: 15,marginTop: 15}} rounded>
              <Ionicons name='ios-gift' size={25} />
              <Input placeholder=' Birthday: '/>
            </Item>
          </Animated.View>
          <Animated.View style={[{width: '100%',}, {right: this.state.xValue.button}]}>
            <Button full danger rounded style={{marginTop: 15, marginHorizontal: 15}}>
              <Text>Sign in</Text>
            </Button>
          </Animated.View>
        </Content>
        <Animated.View style={[{marginBottom: 25, alignItems: 'center', justifyContent: 'center'}, {bottom: this.state.yValue.login}]}>
          <Text>Have you an account?</Text>
          <Button transparent danger full>
            <Text>Login</Text>
          </Button>
        </Animated.View> 
      </Container>
    )
  }
}