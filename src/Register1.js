import React from 'react';
import {Dimensions, TouchableOpacity, Animated, Easing} from 'react-native';
import {View, Text, Container, Content, Item, Button, Input, Thumbnail, Card, CardItem, Body} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');
export default class Register1 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      fadeValue: new Animated.Value(0),
      yValue: new Animated.Value(-100),
      fadeValue: new Animated.Value(0),
      springValue: new Animated.Value(0.8),
    }
  }

  componentDidMount() {
    this.transformAnim();
    this.fadeAnim();
  }

  springAnim = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  transformAnim = () => {
    Animated.timing(this.state.yValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.cubic
    }).start();
  }

  fadeAnim = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Animated.View style={{opacity: this.state.fadeValue}}><Text style={{fontSize: 25, fontWeight: 'bold', color: "#d9534f"}}>Create account</Text></Animated.View>
            <Animated.View style={[{width: width - 60, margin: 15,  shadowColor: '#DBDBDB',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.9,
              shadowRadius: 15,
              elevation: 1, backgroundColor: 'white', borderRadius: 15}, {opacity: this.state.fadeValue}]}> 
              <View style={{borderRadius: 15, borderWidth: 1, borderColor: "#D9534F", marginLeft: 20, marginRight: 20, marginTop: 20}}>     
                <Text style={{marginTop: 15, marginLeft: 15, color: "#D9534F", fontWeight: 'bold'}}>Email: </Text>
                <Item style={{borderColor: "#D9534F", marginLeft: 15, marginRight: 15,marginBottom: 15}}>
                  <Ionicons name='ios-person' size={25} />
                  <Input placeholder=' Yourgmail.@gmail.com '/>
                </Item>
              </View>  
              <View style={{borderRadius: 15, borderWidth: 1, borderColor: "#D9534F", marginTop: 20, marginLeft: 20, marginRight: 20}}>
                <Text style={{marginTop: 15, marginLeft: 15, color: "#D9534F", fontWeight: 'bold'}}>Password: </Text>
                <Item style={{borderColor: "#D9534F", marginLeft: 15, marginRight: 15, marginBottom: 15}}>
                  <Ionicons name='ios-key' size={25} />
                  <Input placeholder=' ********* '/>
                </Item>  
              </View> 
              <View style={{borderRadius: 15, borderWidth: 1, borderColor: "#D9534F", marginTop: 20, marginLeft: 20, marginRight: 20}}>
                <Text style={{marginTop: 15, marginLeft: 15, color: "#D9534F", fontWeight: 'bold'}}>Phone number: </Text>
                <Item style={{borderColor: "#D9534F", marginLeft: 15, marginRight: 15, marginBottom: 15}}>
                  <Ionicons name='ios-phone-portrait' size={25} />
                  <Input placeholder=' +84 968511597 '/>
                </Item>  
              </View>  
              <View style={{borderRadius: 15, borderWidth: 1, borderColor: "#D9534F", marginTop: 20, marginLeft: 20, marginRight: 20,  marginBottom: 20}}>
                <Text style={{marginTop: 15, marginLeft: 15, color: "#D9534F", fontWeight: 'bold'}}>Age: </Text>
                <Item style={{borderColor: "#D9534F", marginLeft: 15, marginRight: 15, marginBottom: 15}}>
                  <Ionicons name='ios-transgender' size={25} />
                  <Input placeholder=' 20 '/>
                </Item>  
              </View>    
               
            </Animated.View>
          </View>
          
          <Animated.View style={[{opacity: this.state.fadeValue}]}>
            <TouchableOpacity style={{marginTop: 20, alignSelf: 'flex-end',marginHorizontal: 30, borderRadius: 10, backgroundColor: "#D9534F", paddingVertical: 15, paddingHorizontal: 25}}>
              <Text style={{color: 'white'}}>Register</Text>
            </TouchableOpacity>
          </Animated.View>

        </Content>
        <Animated.View style={[{marginBottom: 25, alignItems: 'center', justifyContent: 'center'}, {bottom: this.state.yValue}]}>
          <Text>Have you an account?</Text>
          <Button transparent danger full>
            <Text>Login</Text>
          </Button>
        </Animated.View> 
      </Container>
    )
  }
}