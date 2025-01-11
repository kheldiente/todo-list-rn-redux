import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Divider } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import AppChip from "./AppChip";

const TodoListItem = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    paddingVertical: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
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
                </View>
                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <AppChip title={"Health"} color={"#46CF8B"} />
                </View>
            </View>
            <Divider
                color="darkgray"
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
        fontSize: 14,
        marginBottom: 4,
    },
    checkbox: {
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        alignSelf: "flex-start"
    },
    divider: {
        width: "95%",
        alignSelf: "center"
    }
})

export default TodoListItem;