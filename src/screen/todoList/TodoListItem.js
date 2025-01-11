import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Divider } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import AppChip from "../../component/AppChip";
import { getTaskType } from "../../utils";

const TodoListItem = (props) => {
    const data = props.data
    const task = data.tagId && getTaskType(data.tagId)
    const showDivider = props.showDivider && true

    return (
        <View
            key={`${data.id}+${data.name}`}
            style={styles.container}
        >
            <View
                style={{
                    flexDirection: "row",
                    paddingVertical: 20,
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
                                color="lightgray"
                                size={20}
                            />
                        }
                    />
                </View>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                        {data.tagId &&
                            <AppChip
                                title={task.name}
                                color={task.color}
                            />
                        }
                        {data.time &&
                            <AppChip
                                title={data.time}
                                icon={"time"}
                                color={"#46CF8B"}
                                style={{ marginLeft: 15 }}
                            />
                        }
                    </View>
                </View>
            </View>
            {showDivider ??
                <Divider
                    color="darkgray"
                    style={styles.divider}
                />
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
        marginBottom: 4,
    },
    checkbox: {
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        alignSelf: "flex-start"
    },
    divider: {
        width: "95%",
        alignSelf: "center"
    }
})

export default TodoListItem;