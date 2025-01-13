import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import OpaqueBackground from "./OpaqueBackground";
import { Ionicons } from '@expo/vector-icons';

const AppChip = (props) => {
    return (
        <View
            style={{
                flexDirection: "row",
                ...props.style,
            }}
        >
            <Pressable
                key={`appChip+${props.id}`}
                style={{ alignItems: "center" }}
                onPress={props.onPress}
            >
                <OpaqueBackground
                    color={props.color ?? "#7990F8"}
                    style={{ paddingHorizontal: 10, width: "120%" }}
                />
                <View
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    {props.icon &&
                        <Ionicons
                            name={props.icon}
                            style={{ marginRight: 2 }}
                            color="lightgray"
                            size={12}
                        />
                    }
                    <Text style={{
                        ...styles.tag,
                        color: props.color ?? "#7990F8",
                        fontSize: props.fontSize ?? styles.tag.fontSize
                    }}>
                        {props.title.toUpperCase()}
                    </Text>
                </View>
            </Pressable>
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