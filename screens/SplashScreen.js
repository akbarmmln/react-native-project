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
// import { doc, db, onSnapshot } from '../firebase'
// import { Utils } from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';
import db from '../firebase'

// const introImageData = Image.resolveAssetSource(AppImages.welcome);

const SplashScreen = props => {
  const data = true
  const lottieRef = useRef(null);
  const window = useWindowDimensions();

  db
    .collection(`setting`).doc('lDHBS7K7XjKGslVysiMg')
    .get()
    .then(querySnapshot => {
      console.log('querySnapshot', querySnapshot.data().splashscreen)
    })
    .catch(err => {
      console.log('error querySnapshot', err)
    })

  // onSnapshot(doc(db, "setting", "oigQLaWS28U7paQunlgA"), (doc) => {
  //   console.log('ggggggg', doc.data().splashscreen)
  //   setData(doc.data().splashscreen)
  // });

  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (authLoaded) {
      lottieRef.current.pause();
      props.navigation.replace('MainNavigation');
    }
  }, [authLoaded, props.navigation]);

  return (
    <SafeAreaView>
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
        {data ? <LottieView
          ref={lottieRef}
          autoPlay={true}
          loop={false}
          speed={1}
          autoSize={false}
          // source={{uri: data}}
          source={AppImages.wellcome2}
          style={{
            width: 200,
            height: 200
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});

export default SplashScreen;