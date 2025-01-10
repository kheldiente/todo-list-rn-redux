import React from "react";
import { View } from "react-native";

const OpaqueBackground = (props) => {
    return (
        <View
            style={{
                backgroundColor: props.color,
                opacity: 0.10,
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: 8,
            }}
        />
    )
}

export default OpaqueBackground;