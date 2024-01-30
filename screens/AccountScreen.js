import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  ImageBackground
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
const fullWidth = Dimensions.get('screen').width;
import PattenBackgroundSVG from '../components/PatternBackgroundSvg';
import Spacing from '../components/spasing';

const AccountScreen = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground style={{
          height: 200,
          width: fullWidth,
          overflow: 'hidden',
        }} resizeMode="contain">
          <LinearGradient
            colors={['#38d970', '#a2e0b7', '#5f7867']}
            style={{
              width: '100%',
              height: '100%',
            }}
            start={{ x: 0.1, y: 0.5 }}
            end={{ x: 0.3, y: 1.8 }}
          />
          <PattenBackgroundSVG
            fill='#66678B'
            width={fullWidth * 1.8}
            height={fullWidth * 1.8}
            style={{
              opacity: 0.2,
              position: 'absolute',
              left: -80,
              top: -40,
            }}
          />
        </ImageBackground>

        <View style={{
          marginTop: 20,
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: 99,
        }}>
          <View>
            <View>
              <View style={{ paddingHorizontal: Spacing[20] }}>
                <View style={{ flexDirection: 'row', }}>
                  <Text>adirapoin </Text>
                  <View>
                    <Text>member</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;