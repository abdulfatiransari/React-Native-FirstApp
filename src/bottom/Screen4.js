import React from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import {
  LongPressGestureHandler,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";

export default function Screen4() {
  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I've been pressed for 800 milliseconds");
    }
  };

  baseScale = new Animated.Value(1);
  pinchScale = new Animated.Value(1);
  scale = Animated.multiply(this.baseScale, this.pinchScale);
  lastScale = 1;
  onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: this.pinchScale } }],
    { useNativeDriver: true }
  );
  onPinchHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastScale *= event.nativeEvent.scale;
      this.baseScale.setValue(this.lastScale);
      this.pinchScale.setValue(1);
    }
  };

  return (
    <>
      <View>
        <Text>Long Press</Text>
        <LongPressGestureHandler
          onHandlerStateChange={onLongPress}
          minDurationMs={800}
        >
          <View style={styles.box} />
        </LongPressGestureHandler>

        <Text>Pinch to zoom</Text>
        <PinchGestureHandler
          onGestureEvent={this.onPinchGestureEvent}
          onHandlerStateChange={this.onPinchHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.pinchableImage,
              {
                transform: [{ perspective: 1 }, { scale: this.scale }],
              },
            ]}
          ></Animated.View>
        </PinchGestureHandler>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#28b5b5",
    marginTop: 22,
    marginBottom: 22,
  },
  pinchableImage: {
    width: 250,
    height: 250,
    backgroundColor: "#28b5b5",
    marginTop: 22,
    marginBottom: 22,
  },
});
