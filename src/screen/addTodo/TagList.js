import React from "react";
import { View } from "react-native";
import AppChip from "../../component/AppChip";

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
                    fontSize={10}
                    style={{ marginRight: 15 }}
                    onPress={() => props.onSelectTag(value)}
                />
            )}
        </View>
    )
}

export default TagList;