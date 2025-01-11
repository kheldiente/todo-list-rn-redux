import React from "react";
import { Text, View } from "react-native";

const MainHeader = (props) => {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>{props.title} </Text>
            <Text style={{ fontSize: 35, color: "lightgray" }}>{props.subtitle}</Text>
        </View>
    )
}

export default MainHeader;