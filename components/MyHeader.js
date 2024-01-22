import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Text, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const IconSize = 24;

const AppHeader = ({
  style,
  menu,
  onPressMenu,
  back,
  onPressBack,
  title,
  right,
  rightComponent,
  onRightPress,
  optionalBtn,
  optionalBtnPress,
  headerBg = "white",
  iconColor = 'black',
  titleAlight,
  optionalBadge,
}) => {
  const [bgColor, setBgColor] = useState();
  const navMain = useNavigation().getState();
  const history = navMain.history;
  const lengthHistory = history.length;
  const historyState = history[lengthHistory - 1];

  useEffect(() => {
    if (historyState.key.includes('Home')) {
      setBgColor(Colors.primary);
    }
    if (historyState.key.includes('Search')) {
      setBgColor(Colors.green);
    }
    if (historyState.key.includes('Add')) {
      setBgColor(Colors.red);
    }
    if (historyState.key.includes('Account')) {
      setBgColor(Colors.purple);
    }
    if (historyState.key.includes('Like')) {
      setBgColor(Colors.yellow);
    }

    setBgColor(Colors.white);
  }, [bgColor])

  const renderTitle = () => {
    if (historyState.key.includes('Home')) {
      return (
        <Text>Home</Text>
      );
    }
    if (historyState.key.includes('Search')) {
      return (
        <Text>Search</Text>
      );
    }
    if (historyState.key.includes('Add')) {
      return (
        <Text>Add</Text>
      );
    }
    if (historyState.key.includes('Account')) {
      return (
        <Text>Account</Text>
      );
    }
    if (historyState.key.includes('Like')) {
      return (
        <Text>Berita Acara Hari Ini</Text>
      );
    }
  }

  const LeftView = () => (
    <View style={styles.view}>
      {menu && <TouchableOpacity onPress={onPressMenu}>
        <Feather name="menu" size={IconSize} color={iconColor} />
      </TouchableOpacity>}
      {back && <TouchableOpacity onPress={onPressBack}>
        <Feather name="arrow-left" size={IconSize} color={iconColor} />
      </TouchableOpacity>}
    </View>
  )
  const RightView = () => (
    rightComponent ? rightComponent :
      <View style={[styles.view, styles.rightView]}>
        {optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
          <Feather name={optionalBtn} size={IconSize} color={iconColor} />
          {optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
        </TouchableOpacity>}
        {right !== '' && <TouchableOpacity onPress={onRightPress}>
          <Feather name={right} size={IconSize} color={iconColor} />
        </TouchableOpacity>}
      </View>
  )
  const TitleView = () => (
    <View style={styles.titleView}>
      <Title style={{ color: iconColor, textAlign: titleAlight }}>
        {/* {title} */}
        {renderTitle()}
      </Title>
    </View>
  )
  return (
    <Surface style={[styles.header, style, { backgroundColor: bgColor }]}>
      {/* <LeftView /> */}
      <TitleView />
      {/* <RightView /> */}
    </Surface>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
    height: 70,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view: {
    marginTop: 25,
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleView: {
    marginTop: 20,
    marginStart: 20,
    flex: 1,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  }
})