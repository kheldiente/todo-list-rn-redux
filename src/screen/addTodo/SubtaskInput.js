import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { CheckBox } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

const SubtaskInput = (props) => {
    const data = props.data
    const showInput = props.showInput ?? true

    const [text, onChangeText] = useState(data.desc);
    const [checked, setChecked] = useState(false);

    const handleOnChangeInputText = (text) => {
        onChangeText(text)
        props.onUpdateSubtask(props.data.id, text)
    }

    const handleOnCheckboxChange = () => {
        setChecked(!checked)
    }

    return (
        <View
            key={`${data.id}+${data.desc}`}
            style={styles.container}
        >
            {showInput &&
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 15,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <CheckBox
                            key={data.id}
                            containerStyle={styles.checkbox}
                            checked={checked}
                            checkedIcon={
                                <Ionicons
                                    name="checkbox"
                                    color="gray"
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
                            onPress={handleOnCheckboxChange}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={checked ? selectedStateStyles.title : styles.title}
                            placeholder={"Write a subtask..."}
                            placeholderTextColor={"lightgray"}
                            selectionColor={checked ? "gray" : "black"}
                            color={checked ? "gray" : "black"}
                            value={text}
                            onChangeText={handleOnChangeInputText}
                        />
                    </View>
                </View>
            }
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

const selectedStateStyles = StyleSheet.create({
    title: {
        ...styles.title,
        color: "gray",
        textDecorationLine: "line-through"
    }
})

export default SubtaskInput;