import React, { useState } from "react";
import { View, Text, StatusBar, Button, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { AnimatedScanner, Colors } from 'react-native-ui-lib';
import { Card, Title, Paragraph } from 'react-native-paper'
import Modal from "react-native-modalbox";
import posts from '../components/data';
import { AppImages } from '../assets-project';
const featureIcon = AppImages.stars
const shareIcon = AppImages.shares

class Page1Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      started: false,
      reset: false,
      isDone: false
    };
  }

  onBreak = ({isDone}) => {
    if (!isDone) {
      this.start();
    } else {
      this.setState({isDone});
    }
  }

  start = () => {
    const {progress} = this.state;

    this.setState({
      started: true,
      reset: false,
      progress: progress + 25
    });
  }

  reset = () => {
    this.setState({
      started: false,
      progress: 0,
      reset: true,
      isDone: false
    });
  }

  render() {
    const {reset} = this.state;

    return (
      <View style={{ flex: 1, marginTop: 40, marginStart: 20, marginEnd: 20, marginBottom: 20}}>
        <View style={{ backgroundColor: "white", borderTopStartRadius: 30, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 30, marginBottom: 10, overflow: "hidden" }}>
          <View>
            <Image
              // source={require('../assets-project/wellcome/referral-images.jpeg')}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/projectname-63209.appspot.com/o/referral-images.jpeg?alt=media&token=1bc5aea9-a3b5-457a-a0f6-e4af3b6ec8c2',
              }}
              style={{
                resizeMode: "stretch",
                height: 200,
                width: '100%'
              }}
            />
          </View>
          <View style={{ padding: 10, width: '100%' }}>
            <Text>Title</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Description of the image
            </Text>
          </View>

          <AnimatedScanner
            opacity={0.7}
            progress={this.state.progress}
            duration={reset ? 0 : 1500}
            onBreakpoint={this.onBreak}
          />
        </View>

        <View style={{
          marginBottom: 10
        }}>
          <Button title="Publish" onPress={this.start} />
        </View>
      </View>
    );
  }
}

export default Page1Screen; 