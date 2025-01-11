import React from "react";
import { Text, View } from "react-native";

const MainHeader = (props) => {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>Today </Text>
            <Text style={{ fontSize: 35, color: "lightgray" }}>26 Dec</Text>
        </View>
    )
}

export default MainHeader;