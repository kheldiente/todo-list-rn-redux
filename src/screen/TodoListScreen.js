import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "../store/todoListSlice";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoListItem from "../component/TodoListItem";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import TodoTypeBoard from "../component/TodoTypeBoard";
import todoType from "../store/todoType";
import MainHeader from "../component/MainHeader";

const TodoListScreen = () => {
    const insets = useSafeAreaInsets();
    const todos = useSelector((state) => state.todoList.value)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTodoList());
    }, [])

    return (
        <SafeAreaView
            style={{
                ...styles.container,
                paddingTop: insets.top + 10
            }}
            edges={["right", "left"]}
        >
            <MainHeader style={styles.header} />
            <TodoTypeBoard
                key={"todoType+01"}
                style={styles.board}
                types={todoType}
            />
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
    header: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    board: {
        marginVertical: 10,
        marginHorizontal: 10,
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