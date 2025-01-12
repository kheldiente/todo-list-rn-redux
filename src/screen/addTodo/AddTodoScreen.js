import React, { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/themed"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todoListSlice";
import { screenKeys } from "../screenKeys";
import TagList from "./TagList";
import AddSubtaskItem from "./AddSubtaskItem";
import { updateTodoInput, updateSubtask, updateSelectedTag, addSubtask } from "../../store/addTodoSlice";
import Animated, { FadeInUp } from "react-native-reanimated";
import SubtaskInput from "./SubtaskInput";
import config from "../../config/config";

const AddTodoScreen = ({ navigation, _ }) => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.addTodoInput.value)
    const [subtaskVisible, showSubtask] = useState(data.input.length > 0);

    console.log("addTodo", JSON.stringify(data))

    const close = () => {
        navigation.goBack();
    }

    const handleOnChangeInputText = (text) => {
        dispatch(
            updateTodoInput({
                ...data,
                input: text,
            })
        )
        showSubtask(text.length > 0);
    }

    const handleOnClickSave = () => {
        dispatch(
            addTodo({
                name: data.input,
                tagId: data.selectedTag ? data.selectedTag.id : undefined,
                subtasks: data.subtasks
            })
        );
        setTimeout(close, 300);
    }

    const handleOnSelectTag = (tag) => {
        dispatch(
            updateSelectedTag(tag)
        )
    }

    const handleOnClickAddDateTime = () => {
        navigation.push(`${screenKeys.CALENDAR}`)
    }

    const handleOnUpdateSubtask = (index, text) => {
        dispatch(
            updateSubtask({
                id: index,
                desc: text
            })
        )
    }

    const handleOnClickMoreSubtask = () => {
        dispatch(
            addSubtask()
        )
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
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            style={styles.closeBtn}
                            name="close"
                            size={40}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.taskInput}
                        value={data.input}
                        multiline
                        numberOfLines={10}
                        placeholder={"Write a new task..."}
                        cursorColor={"black"}
                        onChangeText={handleOnChangeInputText}
                    />
                    {subtaskVisible &&
                        <View>
                            <FlatList
                                key={"addTodo+tasks"}
                                keyExtractor={(item, index) => `${item.name}+${index}`}
                                data={data.subtasks}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <Animated.View
                                            entering={FadeInUp.duration(100).delay(200)}
                                        >
                                            <SubtaskInput
                                                data={{ id: index, desc: item.desc }}
                                                showDivider={false}
                                                onUpdateSubtask={handleOnUpdateSubtask}
                                            />
                                        </Animated.View>
                                    )
                                }}
                            />
                            <AddSubtaskItem
                                onClickAddMoreSubtask={handleOnClickMoreSubtask}
                            />
                        </View>
                    }
                </View>
                <View style={{ flexDirection: "column" }}>
                    {subtaskVisible &&
                        <TagList
                            style={styles.tagList}
                            selectedTag={data.selectedTag}
                            onSelectTag={handleOnSelectTag}
                        />
                    }
                    <View style={styles.btnContainer}>
                        {config.showCalendar &&
                            <Button
                                buttonStyle={styles.addTimeBtn}
                                disabled={data.input.length == 0}
                                onPress={handleOnClickAddDateTime}
                            >
                                <Ionicons
                                    color={subtaskVisible ? "black" : "gray"}
                                    name="time"
                                    size={28}
                                    disabled={data.input.length == 0}
                                />
                            </Button>
                        }
                        <View style={{
                            flex: 1,
                            alignSelf: "center",
                            marginLeft: config.showCalendar ? 10 : 0,
                        }}>
                            <Button
                                buttonStyle={styles.saveBtn}
                                title={"Save"}
                                disabled={data.input.length == 0}
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
        paddingBottom: 15,
    }
})

export default AddTodoScreen;