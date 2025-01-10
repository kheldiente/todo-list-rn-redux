import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Divider } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import OpaqueBackground from "./OpaqueBackground";

const TodoListItem = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    paddingVertical: 10,
                }}
            >
                <CheckBox
                    key={props.id ?? props.title}
                    containerStyle={styles.checkbox}
                    checkedIcon={
                        <Ionicons
                            name="checkbox"
                            color="darkviolet"
                            size={20}
                        />
                    }
                    uncheckedIcon={
                        <Ionicons
                            name="checkbox-outline"
                            color="lightgray"
                            size={20}
                        />
                    }
                />
                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <View>
                        <OpaqueBackground color={"#7990F8"} />
                        <Text style={styles.tag}>HEALTH</Text>
                    </View>
                </View>
            </View>
            <Divider
                color="lightgray"
                style={styles.divider}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 15,
        marginBottom: 5,
    },
    checkbox: {
        backgroundColor: 'transparent',
        alignSelf: "flex-start"
    },
    tag: {
        marginVertical: 5,
        paddingHorizontal: 2,
        paddingVertical: 2,
        fontSize: 8,
        fontWeight: "bold",
        color: "#7990F8",
        textAlign: "center",
    },
    divider: {
        width: "95%",
        alignSelf: "center"
    }
})

export default TodoListItem;