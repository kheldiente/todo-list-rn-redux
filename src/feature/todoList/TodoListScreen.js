import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoListItem from "./TodoListItem";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import TodoTypeBoard from "./TodoTypeBoard";
import todoType from "../../data/todoType";
import PrimaryHeader from "../../component/PrimaryHeader";
import { screenKeys } from "../screenKeys";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";
import config from "../../config/config";
import { deleteTodo, toggleSubtaskTodoCheckbox, toggleTodoCheckbox } from "../../screen/todoList/todoListSlice";
import SwipeableRowItem from "../../component/SwipeableRowItem";
import { dateToday } from "../../utils";

const TodoListScreen = ({ navigation, _ }) => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const { todos, dashboard } = useSelector((state) => state.todoList.value)

    const handleOnClickAddTaskBtn = useCallback(() => {
        navigation.push(`${screenKeys.ADD_TODO}`)
    }, [])
    
    const handleOnCheckboxChange = useCallback((id) => {
        dispatch(toggleTodoCheckbox({ id: id }))
    }, [todos])

    const handleOnSubtaskCheckboxChange = useCallback((parentId, childId) => {
        dispatch(toggleSubtaskTodoCheckbox({ parentId: parentId, childId: childId }))
    }, [todos])

    const handleOnClickItemAction = useCallback((id) => {
        dispatch(deleteTodo(id))
    }, [todos])

    return (
        <SafeAreaView
            style={{
                ...styles.container,
                paddingTop: insets.top + 10
            }}
            edges={["right", "left"]}
        >
            <Animated.View
                entering={FadeInLeft.duration(400).delay(300)}
            >
                <PrimaryHeader
                    title={"Today"}
                    subtitle={dateToday()}
                    key={"todoList+header"}
                    style={styles.header}
                />
            </Animated.View>
            <TodoTypeBoard
                key={"todoList+board"}
                style={styles.board}
                types={todoType}
                data={dashboard}
            />
            <FlatList
                key={"todoList+tasks"}
                keyExtractor={(item, index) => `${item.name}+${index}`}
                data={todos}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                renderItem={({ item, index }) => {
                    return (
                        <Animated.View
                            key={index}
                            entering={FadeIn.duration(300).delay(index * 200)}
                        >
                            <SwipeableRowItem
                                key={`todo+${index}+swipeable`}
                                action={"Delete"}
                                onClickItemAction={() => {
                                    handleOnClickItemAction(item.id)
                                }}
                            >
                                <TodoListItem
                                    key={`todo+${index}+parent`}
                                    data={item}
                                    showTime={config.showCalendar}
                                    onCheckboxChange={handleOnCheckboxChange}
                                >
                                    {item.subtasks.map((i) =>
                                        <TodoListItem
                                            key={`todo+${index}+${i.id}`}
                                            data={{ ...i, name: i.desc }}
                                            defaultStyling={false}
                                            showDivider={false}
                                            style={{ marginTop: 10 }}
                                            onCheckboxChange={(id) =>
                                                handleOnSubtaskCheckboxChange(item.id, id)
                                            }
                                        />
                                    )}
                                </TodoListItem>
                            </SwipeableRowItem>
                        </Animated.View>
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