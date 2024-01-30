import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';
// import Modal from "react-native-modalbox";
import Modal from "react-native-modal";

const {width, height } = Dimensions.get("window");

const Page2Screen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const modal = useRef(null);

  const onSwipe = (percentageShown, swipingDirection) => {
    if (swipingDirection === 'down' && percentageShown <= 0.2) {
      setModalVisible(false)
    }
  }

  // const getModal = () => {
  //   return (
  //     <Modal
  //       entry="bottom"
  //       backdropPressToClose={true}
  //       isOpen={modalVisible}
  //       style={styles.modalBox}
  //       onClosed={() => setModalVisible(false)}
  //     >
  //       <View style={styles.content}>
  //         <Text style={styles.textStyle}>AndroidVille</Text>
  //       </View>
  //     </Modal>
  //   );
  // };

  return (
    <View style={styles.container}>
      <Button title="Press Me!" onPress={() => setModalVisible(true)} />
      {/* {getModal()} */}

      <Modal
        ref={modal}
        style={{
          margin: 0
        }}
        isVisible={modalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        // onBackdropPress={() => setModalVisible(false)}
        // onSwipeComplete={() => setModalVisible(false)}
        onSwipeMove={(percentageShown) => onSwipe(percentageShown, modal.current.currentSwipingDirection)}
        // onSwipeComplete={({ swipingDirection }) =>
        //   swipingDirection == "down" && setModalVisible(false)
        // }
        swipeDirection={['up', 'down']}
        // swipeThreshold={50}
        propagateSwipe={true}
      >
         <View style={styles.content}>
           <Text style={styles.textStyle}>AndroidVille</Text>
         </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBox: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height,
    width,
    backgroundColor: "transparent"
  },
  content: {
    position: "absolute",
    bottom: 0,
    width,
    height: 350,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    backgroundColor: "white"
  },
  textStyle: {
    fontSize: 22
  }
});

export default Page2Screen;

// const Home = () => { 
//   return ( 
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
//         <Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text> 
//         <Ionicons name="md-home" size={80} color="#006600" /> 
//       </View> 
//     </SafeAreaView>
//   ); 
// }; 
  
// export default Home; 