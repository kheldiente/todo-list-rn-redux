import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "../store/todoListSlice";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoListItem from "../component/TodoListItem";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import TodoTypeBoard from "../component/TodoTypeBoard";
import todoType from "../store/todoType";
import PrimaryHeader from "../component/PrimaryHeader";

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
            <PrimaryHeader style={styles.header} />
            <TodoTypeBoard
                key={"todoType+01"}
                style={styles.board}
                types={todoType}
            />
            <FlatList
                keyExtractor={(item) => item}
                data={todos}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                renderItem={({ item }) => {
                    return (
                        <TodoListItem data={item} />
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
        marginTop: 10,
        marginHorizontal: 10,
    },
    addTaskButton: {
        alignSelf: "center",
        borderRadius: 15,
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