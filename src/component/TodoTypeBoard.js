import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import OpaqueBackground from "./OpaqueBackground";

const TodoTypeBoard = (props) => {
    return (
        <View
            key={props.key}
            style={{
                ...styles.container,
                ...props.style
            }}
        >
            {Object.entries(props.types).map(([_, value]) =>
                <View style={styles.item}>
                    <OpaqueBackground color={value.color} />
                    <View
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                        }}
                    >
                        <Ionicons
                            name={value.icon}
                            color={value.color}
                            size={20}
                        />
                        <View style={styles.content}>
                            <Text style={{ fontWeight: "bold" }}>6 </Text>
                            <Text
                                key={value.id}
                                style={styles.title}
                            >
                                {value.name}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    item: {
        flexDirection: "row",
        width: "50%",
        paddingHorizontal: 2,
        paddingVertical: 2,
    },
    title: {
        fontSize: 15,
        color: "gray"
    },
    content: {
        flexDirection: "row",
        marginTop: 5,
    }
})

export default TodoTypeBoard;