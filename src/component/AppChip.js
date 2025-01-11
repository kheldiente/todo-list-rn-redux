import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OpaqueBackground from "./OpaqueBackground";

const AppChip = (props) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View
                style={{ alignItems: "center" }}
            >
                <OpaqueBackground
                    color={props.color ?? "#7990F8"}
                    style={{ paddingHorizontal: 10, width: "120%" }}
                />
                <Text style={{
                    ...styles.tag,
                    color: props.color ?? "#7990F8"
                }}>
                    {props.title.toUpperCase()}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        marginVertical: 5,
        fontSize: 9,
        fontWeight: "bold",
        color: "#7990F8",
    },
})

export default AppChip;