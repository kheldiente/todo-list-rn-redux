import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox, Divider } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

const AddSubtaskItem = (props) => {
    const handleOnClickAddMoreSubtask = () => {
        props.onClickAddMoreSubtask()
    }

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginTop: 15,
                }}
                onPress={handleOnClickAddMoreSubtask}
            >
                <CheckBox
                    containerStyle={styles.checkbox}
                    checkedIcon={
                        <Ionicons
                            name="add"
                            color="darkviolet"
                            size={20}
                        />
                    }
                    uncheckedIcon={
                        <Ionicons
                            name="add-outline"
                            color="lightgray"
                            size={20}
                        />
                    }
                />
                <Text style={styles.addSubtask}>Add more subtask</Text>
            </TouchableOpacity>
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
        color: "gray",
    },
    addSubtask: {
        fontSize: 15,
        color: "lightgray"
    },
    checkbox: {
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        alignSelf: "flex-start"
    },
})

export default AddSubtaskItem;