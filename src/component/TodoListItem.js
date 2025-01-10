import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Divider } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

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
                            color="grey"
                            size={20}
                        />
                    }
                />
                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.tag}>HEALTH</Text>
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
    },
    checkbox: {
        backgroundColor: 'transparent',
        alignSelf: "flex-start"
    },
    tag: {
        marginVertical: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 10,
        backgroundColor: "powderblue",
        color: "darkblue",
        textAlign: "center",
        borderRadius: 5,
    },
    divider: {
        width: "95%",
        alignSelf: "center"
    }
})

export default TodoListItem;