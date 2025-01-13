import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";

const SwipeableRowItem = (props) => {
    const rightActions = (progress, drag) => {
        const styleAnimation = useAnimatedStyle(() => {
            return {
                transform: [{ translateX: drag.value + 50 }],
            };
        });

        return (
            <Reanimated.View style={styleAnimation}>
                <Pressable
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        backgroundColor: "red",
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        props.onClickItemAction()
                    }}
                >
                    <Text
                        style={styles.rightAction}
                    >
                        {props.action}
                    </Text>
                </Pressable>
            </Reanimated.View>
        );
    }

    return (
        <GestureHandlerRootView>
            <ReanimatedSwipeable
                friction={2}
                enableTrackpadTwoFingerGesture
                rightThreshold={40}
                renderRightActions={rightActions}
            >
                {props.children}
            </ReanimatedSwipeable>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    rightAction: {
        width: 50,
        color: "white",
        textAlign: "center"
    },
});

export default SwipeableRowItem;