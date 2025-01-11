import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoListItem from "./TodoListItem";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import TodoTypeBoard from "./TodoTypeBoard";
import todoType from "../../store/todoType";
import PrimaryHeader from "../../component/PrimaryHeader";
import { screenKeys } from "../screenKeys";
import { getTodoDashboardData } from "../../utils";

const TodoListScreen = ({ navigation, _ }) => {
    const insets = useSafeAreaInsets();
    const todos = useSelector((state) => state.todoList.value)

    const handleOnClickAddTaskBtn = () => {
        navigation.push(`${screenKeys.ADD_TODO}`)
    }

    return (
        <SafeAreaView
            style={{
                ...styles.container,
                paddingTop: insets.top + 10
            }}
            edges={["right", "left"]}
        >
            <PrimaryHeader
                key={"todoList+header"}
                style={styles.header}
            />
            <TodoTypeBoard
                key={"todoList+board"}
                style={styles.board}
                types={todoType}
                data={getTodoDashboardData(todos)}
            />
            <FlatList
                key={"todoList+tasks"}
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
                key={"todoList+floatingBtn"}
                onPress={() => handleOnClickAddTaskBtn()}
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
        marginHorizontal: 30,
        marginVertical: 40,
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