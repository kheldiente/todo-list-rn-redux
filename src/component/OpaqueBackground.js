import React from "react";
import { StyleSheet, View } from "react-native";

const OpaqueBackground = (props) => {
    return (
        <View
            style={{
                ...styles.default,
                ...props.style,
                backgroundColor: props.color,
            }}
        />
    )
}

const styles = StyleSheet.create({
    default: {
        opacity: 0.10,
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 8,
    }
})

export default OpaqueBackground;