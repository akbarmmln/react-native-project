import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import AddScreen from '../screens/AddScreen'
import AccountScreen from '../screens/AccountScreen'
import LikeScreen from '../screens/LikeScreen'

export default function ColorScreen({ route, navigation }) {
  const viewRef = React.useRef(null);
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    if (route.name === 'Home') { setBgColor(Colors.primary); }
    if (route.name === 'Search') { setBgColor(Colors.green); }
    if (route.name === 'Add') { setBgColor(Colors.red); }
    if (route.name === 'Account') { setBgColor(Colors.purple); }
    if (route.name === 'Like') { setBgColor(Colors.yellow); }
    setBgColor(Colors.white);
  }, [])

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    //   viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
    // })
    // return () => unsubscribe;
  }, [navigation])

  const renderMenu = () => {
    if (route.name === 'Home') {
      return (
        <HomeScreen />
      );
    }
    if (route.name === 'Search') {
      return (
        <SearchScreen />
      );
    }
    if (route.name === 'Add') {
      return (
        <AddScreen />
      );
    }
    if (route.name === 'Account') {
      return (
        <AccountScreen />
      );
    }
    if (route.name === 'Like') {
      return (
        <LikeScreen />
      );
    }
  }

  return (
    <View style={Styles.container}>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        style={Styles.container}>
        <View style={{ backgroundColor: bgColor, flex: 1 }}>
          {renderMenu()}
        </View>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({})