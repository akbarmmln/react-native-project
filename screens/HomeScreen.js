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
  Dimensions
} from 'react-native';
import HeaderComp from '../components/Header';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { AppImages } from '../assets-project';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;
const heightFill = windowHeight - (70 + navbarHeight)

const HomeScreen = () => {
  return (
    <View
      style={{
        height: heightFill
      }}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <View>
          <HeaderComp />
          <View
            style={{
              padding: 20,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Search Product"
              underlineColorAndroid="transparent"
            />
            <View style={styles.filter}>
              <IonIcons
                style={{ color: 'white', textAlign: 'center' }}
                name="options-outline"
                size={25}
              />
            </View>
          </View>
          <View style={styles.categories}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingRight: 18,
                paddingLeft: 18,

                marginTop: 10,
              }}>
              <Text style={{ color: '#16162E', fontSize: 18, fontWeight: 'bold' }}>
                Categories
              </Text>
              <Text style={{ color: '#F33A63', fontSize: 14, fontWeight: 'bold' }}>
                See all
              </Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.slider}>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Vegetables</Text>
                </View>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Fish</Text>
                </View>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Drinks</Text>
                </View>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Meat</Text>
                </View>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Drinks</Text>
                </View>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Meat</Text>
                </View>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Drinks</Text>
                </View>
                <View style={styles.categoryBox}>
                  <Image source={AppImages.carrots} />
                  <Text style={{ color: '#16162E', fontSize: 10 }}>Meat</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.tabs}>
            <Text style={styles.tabFont}>Popular pack</Text>
            <Text style={styles.tabFont}>Top item</Text>
            <Text style={styles.tabFontNew}>Whats new</Text>
            <Text style={styles.tabFont}>Stock</Text>
          </View>
          <View style={styles.categories}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingRight: 18,
                paddingLeft: 18,
                marginTop: 10,
              }}>
              <Text style={{ color: '#16162E', fontSize: 18, fontWeight: 'bold' }}>
                Hot Meal
              </Text>

              <Text
                style={{ color: '#F33A63', fontSize: 14, fontWeight: 'bold' }}>
                Buy More
              </Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.salesSlider}>
                <View style={styles.sales}>
                  <Image source={AppImages.lays} />
                  <View style={styles.label}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>-05%</Text>
                  </View>
                </View>
                <View style={styles.sales}>
                  <Image source={AppImages.lays} />
                  <View style={styles.label}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>-05%</Text>
                  </View>
                </View>
                <View style={styles.sales}>
                  <Image source={AppImages.lays} />
                  <View style={styles.label}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>-05%</Text>
                  </View>
                </View>
                <View style={styles.sales}>
                  <Image source={AppImages.lays} />
                  <View style={styles.label}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>-05%</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.categories}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingRight: 18,
                paddingLeft: 18,
                marginTop: 10,
              }}>
              <Text style={{ color: '#16162E', fontSize: 18, fontWeight: 'bold' }}>
                Popular product
              </Text>
              <Text style={{ color: '#F33A63', fontSize: 14, fontWeight: 'bold' }}>
                See all
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                // marginBottom: 10,
                // height: 360
              }}>
              <View style={styles.productCard}>
                <TouchableOpacity>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{ marginTop: 30 }}
                      source={AppImages.orange}
                    />
                    <IonIcons
                      style={styles.heartIcon}
                      name="heart-outline"
                      size={25}
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={{ fontSize: 16, paddingLeft: 8 }}>Malta</Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingRight: 8,
                      }}>
                      <Image source={AppImages.star} />
                      <Text style={{ color: '#16162E', fontSize: 10 }}>4.5</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 14, paddingLeft: 8, color: '#d3d3d3' }}>
                    4 Pic
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text style={{ fontSize: 18, paddingLeft: 8, fontWeight: 'bold' }}>
                      $12.50
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#40AA54',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                        padding: 5,
                        borderRadius: 5,
                      }}>
                      <AntIcon name="shoppingcart" color="white" size={25} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productCard}>
                <TouchableOpacity>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{ marginTop: 30, height: 80, width: 100 }}
                      source={AppImages.garlic}
                    />
                    <IonIcons
                      style={styles.heartIcon}
                      name="heart"
                      size={25}
                      color="#F33A63"
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={{ fontSize: 16, paddingLeft: 8 }}>Garlic</Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingRight: 8,
                      }}>
                      <Image source={AppImages.star} />
                      <Text style={{ color: '#16162E', fontSize: 10 }}>4.5</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 14, paddingLeft: 8, color: '#d3d3d3' }}>
                    Weight : 1Kg
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{ fontSize: 18, paddingLeft: 8, fontWeight: 'bold' }}>
                      $17.00
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#40AA54',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                        padding: 5,
                        borderRadius: 8,
                      }}>
                      <AntIcon name="shoppingcart" color="white" size={25} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  location: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  searchBar: {
    width: '100%',
    padding: 20,
  },
  input: {
    paddingTop: 10,
    width: 300,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#15e695',
    color: '#424242',
    borderRadius: 8,
  },
  label: {
    backgroundColor: '#FF4646',
    width: 100,
    marginTop: -13,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: -10,
  },
  filter: {
    backgroundColor: '#40AA54',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  slider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  salesSlider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  heartIcon: {
    marginTop: 10,
  },
  categoryBox: {
    height: 74,
    width: 69,
    padding: 7,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    margin: 10,
    elevation: 1,
    borderRadius: 3,
  },
  tabs: {
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabFont: {
    fontSize: 14,
  },
  tabFontNew: {
    fontSize: 14,
    color: '#63B974',
    fontWeight: 'bold',
    borderBottomColor: '#63B974',
    borderBottomWidth: 2,
  },
  sales: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    margin: 10,
  },
  productCard: {
    height: 230,
    width: 166,
    backgroundColor: '#ffffff',
    marginTop: 10,
    borderRadius: 10,
  },
});

// const HomeScreen = () => {
//   return (
//     <View style={styles.root}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default HomeScreen;