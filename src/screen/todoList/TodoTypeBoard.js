import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import OpaqueBackground from "../../component/OpaqueBackground";

const TodoTypeBoard = (props) => {
    return (
        <View
            style={{
                ...styles.container,
                ...props.style
            }}
        >
            {Object.entries(props.types).map(([key, value]) =>
                <View
                    key={`${key}+type`}
                    style={styles.item}
                >
                    <OpaqueBackground color={value.color} />
                    <View
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 12,
                        }}
                    >
                        <Ionicons
                            name={value.icon}
                            color={value.color}
                            size={20}
                        />
                        <View style={styles.content}>
                            <Text style={{ fontWeight: "bold", marginRight: 5, }}>
                                {props.data &&
                                    props.data[value.id] ? props.data[value.id].length : 0
                                }
                            </Text>
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