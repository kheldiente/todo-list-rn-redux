import React, { useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    View
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/themed"
import TodoListItem from "../todoList/TodoListItem";
import todoType from "../../store/todoType";
import AppChip from "../../component/AppChip";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoListSlice";

const TagList = (props) => {
    const tagId = props.selectedTag && props.selectedTag.id
    return (
        <View
            style={{
                ...props.style,
                flexDirection: "row"
            }}
        >
            {Object.entries(todoType).map(([key, value]) =>
                <AppChip
                    key={`${key}+${value.id}`}
                    title={value.name}
                    color={tagId === value.id ? value.color : "lightgray"}
                    style={{ marginRight: 15 }}
                    onPress={() => props.onSelectTag(value)}
                />
            )}
        </View>
    )
}

const AddTodoScreen = ({ navigation, _ }) => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();

    const inputText = useRef("");
    const [text, onChangeText] = useState("");
    const [subtaskVisible, showSubtask] = useState(false);
    const [selectedTag, setSelectedTag] = useState(null);

    const close = () => {
        navigation.goBack();
    }

    const handleOnChangeInputText = (text) => {
        inputText.current = text;

        onChangeText(text);
        showSubtask(text.length > 0);
    }

    const handleOnClickSave = () => {
        dispatch(
            addTodo({
                name: inputText.current,
                tagId: selectedTag ? selectedTag.id : undefined
            })
        );
        setTimeout(close, 300);
    }

    const handleOnSelectTag = (tag) => {
        setSelectedTag(tag)
    }

    return (
        <SafeAreaView
            style={{
                ...styles.container,
                paddingTop: insets.top + 10,
                paddingBottom: insets.bottom + 10,
            }}
            edges={["right", "left"]}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        paddingHorizontal: 15,
                    }}
                >
                    <Ionicons
                        style={styles.closeBtn}
                        name="close"
                        size={40}
                        onPress={() => navigation.goBack()}
                    />
                    <TextInput
                        style={styles.taskInput}
                        value={text}
                        multiline
                        numberOfLines={10}
                        placeholder={"Write a new task..."}
                        cursorColor={"black"}
                        onChangeText={handleOnChangeInputText}
                    />
                    {subtaskVisible &&
                        <TodoListItem
                            data={{ name: "Add subtask" }}
                            showDivider={false}
                        />
                    }
                </View>
                <View style={{ flexDirection: "column" }}>
                    {subtaskVisible &&
                        <TagList
                            style={styles.tagList}
                            selectedTag={selectedTag}
                            onSelectTag={handleOnSelectTag}
                        />
                    }
                    <View style={styles.btnContainer}>
                        <Button
                            buttonStyle={styles.addTimeBtn}
                        >
                            <Ionicons
                                color={subtaskVisible ? "black" : "gray"}
                                name="time"
                                size={28}
                                onPress={() => navigation.goBack()}
                                disabled={text.length == 0}
                            />
                        </Button>
                        <View style={{
                            flex: 1,
                            alignSelf: "center",
                            marginLeft: 10,
                        }}>
                            <Button
                                buttonStyle={styles.saveBtn}
                                title={"Save"}
                                disabled={text.length == 0}
                                onPress={handleOnClickSave}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    closeBtn: {
        alignSelf: "flex-end",
    },
    taskInput: {
        width: "100%",
        fontSize: 25,
    },
    saveBtn: {
        backgroundColor: "black",
        borderRadius: 8,
    },
    addTimeBtn: {
        backgroundColor: "#E0E0E0",
        borderRadius: 8,
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    tagList: {
        paddingHorizontal: 5,
        paddingVertical: 10,
    }
})

export default AddTodoScreen;