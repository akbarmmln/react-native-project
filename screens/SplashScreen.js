'use strict';
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, useWindowDimensions, SafeAreaView } from 'react-native';
import { AppImages } from '../assets-project';
import LottieView from 'lottie-react-native';
import Svg, {
  Use,
  ImageSVG,
  SvgUri,
  Circle,
  SvgXml
} from 'react-native-svg';
import { db } from '../firebase'

// const introImageData = Image.resolveAssetSource(AppImages.welcome);

const SplashScreen = props => {
  const [dataLottie, dataLottieValue] = useState(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    db
    .collection(`${process.env.EXPO_PUBLIC_FIRESTORE}`)
    .doc("lDHBS7K7XjKGslVysiMg")
    .get()
    .then(querySnapshot => {
      dataLottieValue(querySnapshot.data().splashscreen)
    })
    .catch(err => {
      dataLottieValue('https://lottie.host/3b2153a6-fb9e-4d11-9185-643aea132441/xT1u2C0Yhf.json')
    })
  }, [dataLottie]);

  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (authLoaded) {
      lottieRef.current.pause();
      props.navigation.replace('MainNavigation');
    }
  }, [authLoaded, props.navigation]);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <View>
        {/* <SvgXml xml={data} style={{
          width: 200,
          height: 200,
        }} /> */}
        {/* <SvgUri
          width="100%"
          height="100%"
          uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
        /> */}
        {dataLottie ? <LottieView
          ref={lottieRef}
          autoPlay={true}
          loop={false}
          speed={1}
          autoSize={false}
          source={{uri: dataLottie}}
          // source={AppImages.wellcome2}
          style={{
            width: 200,
            height: 200,
          }}
          onAnimationFinish={(isCanceled) => {
            if (!isCanceled) {
              lottieRef.current.play();
              setTimeout(() => {
                setAuthLoaded(true);
              }, 5000);
            }
          }}
        /> : (null)}
        {/* <Image
          style={{
            width: window.width,
            height: undefined,
            aspectRatio: introImageData
              ? introImageData.width / introImageData.height
              : 357 / 470,
          }}
          source={AppImages.wellcome}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#d1eaeb',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});

export default SplashScreen;