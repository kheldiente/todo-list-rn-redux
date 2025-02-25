import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OpaqueBackground from "../../component/OpaqueBackground";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import SvgIcon from "../../component/SvgIcon";
import appIcons from "../../component/AppIcons";

const TodoTypeBoard = (props) => {
    var count = 0;
    return (
        <View
            style={{
                ...styles.container,
                ...props.style
            }}
        >
            {Object.entries(props.types).map(([key, value]) =>
                <Animated.View
                    key={`${key}+type`}
                    style={styles.item}
                    entering={
                        ++count % 2 == 1
                            ? FadeInLeft.duration(300).delay(200)
                            : FadeInRight.duration(300).delay(200)
                    }
                >
                    <OpaqueBackground color={value.color} />
                    <View
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 12,
                        }}
                    >
                        <SvgIcon
                            width={20}
                            height={20}
                            name={appIcons[value.icon]}
                        />
                        <View style={styles.content}>
                            <Text style={{ fontWeight: "bold", marginRight: 5, }}>
                                {props.data &&
                                    props.data[value.id] ? props.data[value.id].length : 0
                                }
                            </Text>
                            <Text
                                key={value.id}
                                style={styles.title}
                            >
                                {value.name}
                            </Text>
                        </View>
                    </View>
                </Animated.View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    item: {
        flexDirection: "row",
        width: "50%",
        paddingHorizontal: 2,
        paddingVertical: 2,
    },
    title: {
        fontSize: 15,
        color: "gray"
    },
    content: {
        flexDirection: "row",
        marginTop: 8,
    }
})

export default TodoTypeBoard;