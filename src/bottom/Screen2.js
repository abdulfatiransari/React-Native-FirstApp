import { View, Text, FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React, { useRef, useState } from "react";
import { TapGestureHandler, State } from "react-native-gesture-handler";

const Screen2 = () => {
  const [likeColor, setLikeColor] = useState("#28b5b5");
  const doubleTapRef = useRef(null);

  const onSingleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("Hey single");
    }
  };
  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      likeColor === "#28b5b5" ? setLikeColor("red") : setLikeColor("#28b5b5");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Single Tap</Text>
      <TapGestureHandler
        onHandlerStateChange={onSingleTapEvent}
        waitFor={doubleTapRef}
      >
        <View
          style={{ backgroundColor: "#90909D", width: 100, height: 100 }}
        ></View>
      </TapGestureHandler>
      <Text>Double Tap</Text>
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={onDoubleTapEvent}
        numberOfTaps={2}
      >
        <View
          style={{ backgroundColor: likeColor, width: 100, height: 100 }}
        ></View>
      </TapGestureHandler>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#fad586",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});
