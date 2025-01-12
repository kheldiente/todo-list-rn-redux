import React from "react";
import { View } from "react-native";
import AppChip from "../../component/AppChip";
import Animated from "react-native-reanimated";
import { FadeInLeft } from "react-native-reanimated/src";

const TagList = (props) => {
    const tagId = props.selectedTag && props.selectedTag.id
    var counter = 0;

    return (
        <View
            style={{
                ...props.style,
                flexDirection: "row"
            }}
        >
            {Object.entries(todoType).map(([key, value]) =>
                <Animated.View
                    entering={FadeInLeft.duration(100).delay(++counter * 100)}
                >
                    <AppChip
                        key={`${key}+${value.id}`}
                        title={value.name}
                        color={tagId === value.id ? value.color : "lightgray"}
                        fontSize={10}
                        style={{ marginRight: 15 }}
                        onPress={() => props.onSelectTag(value)}
                    />
                </Animated.View>
            )}
        </View>
    )
}

export default TagList;