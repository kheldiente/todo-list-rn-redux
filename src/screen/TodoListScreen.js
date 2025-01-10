import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "../store/todoListSlice";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoListItem from "../component/TodoListItem";
import { SafeAreaView } from "react-native-safe-area-context";

const TodoListScreen = () => {
    const todos = useSelector((state) => state.todoList.value)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTodoList());
    }, [])

    return (
        <SafeAreaView
            style={styles.container}
            edges={["right", "left"]}
        >
            <View>
                <FlatList
                    keyExtractor={(item) => item}
                    data={todos}
                    style={{ marginTop: 15 }}
                    renderItem={({ item }) => {
                        return (
                            <TodoListItem title={item} />
                        )
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    dispatch(setTodoList());
                }}
                style={styles.addTaskButton}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',
    },
    addTaskButton: {
        alignSelf: "center",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 40,
        position: "absolute",
        right: "auto",
        bottom: "auto",
        backgroundColor: "black"
    },
    plus: {
        fontSize: 40,
        color: "white"
    }
})

export default TodoListScreen;