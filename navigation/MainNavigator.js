import React, { useEffect, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons';
import Colors from '../constants/Colors';
import ColorScreen from '../pages2/ColorScreen';
import * as Animatable from 'react-native-animatable';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Ionicons, icon: 'home', component: ColorScreen },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: ColorScreen },
  { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: ColorScreen },
  { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: ColorScreen },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: ColorScreen },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#731ad9',
        tabBarInactiveTintColor: '#249bc9',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Search'){
            iconName = focused
              ? 'search'
              : 'search-outline';
          } else if (route.name === 'Add'){
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          } else if (route.name === 'Like'){
            iconName = focused
              ? 'newspaper'
              : 'newspaper-outline';
          } else if (route.name === 'Account'){
            iconName = focused
              ? 'person'
              : 'person-outline';
          }
          return (
            <Ionicons
            name={iconName}
            size={size}
            color={color}
          />

            // <MaterialCommunityIcons
            //   name={iconName}
            //   size={size}
            //   color={color}
            // />
          );
        }
      })}>

      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}/>
        )
      })}
    </Tab.Navigator>
  );
  // return (
  //   <Tab.Navigator
  //     screenOptions={{
  //       headerShown: false,
  //       tabBarStyle: styles.tabBar,
  //     }}
  //   >
  //     {TabArr.map((item, index) => {
  //       return (
  //         <Tab.Screen key={index} name={item.route} component={item.component}
  //           options={{
  //             tabBarShowLabel: false,
  //             tabBarButton: (props) => <TabButton {...props} item={item} />
  //           }}
  //         />
  //       )
  //     })}
  //   </Tab.Navigator>
  // );
};
export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  }
})