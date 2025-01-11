import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import OpaqueBackground from "../../component/OpaqueBackground";
import Animated, { FadeIn, FlipInXUp } from "react-native-reanimated";

const DateCarouselItem = (props) => {
    return (
        <Pressable
            onPress={() => {
                props.onPress(props.tag)
            }}
        >
            <View
                style={
                    props.selected ? {
                        borderWidth: 0.5,
                        borderColor: selectedStateStyles.carouselItem.borderColor,
                        borderRadius: 5,
                    } : undefined
                }
            >
                {props.selected &&
                    <OpaqueBackground color={selectedStateStyles.carouselItem.color} />
                }
                <View
                    style={props.selected
                        ? {
                            ...selectedStateStyles.carouselItem,
                            borderWidth: 0,
                        }
                        : styles.carouselItem
                    }
                >
                    <Text
                        style={props.selected ?
                            selectedStateStyles.dayName : styles.dayName
                        }
                    >
                        {props.date.dayName}
                    </Text>
                    <Text
                        style={props.selected ?
                            selectedStateStyles.dayNumber : styles.dayNumber
                        }
                    >
                        {props.date.dayNumber}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const DateCarousel = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dates, _] = useState([
        { dayNumber: 20, dayName: "Fri" },
        { dayNumber: 21, dayName: "Sat" },
        { dayNumber: 22, dayName: "Sun" },
        { dayNumber: 23, dayName: "Mon" },
        { dayNumber: 24, dayName: "Tue" },
        { dayNumber: 25, dayName: "Wed" },
        { dayNumber: 26, dayName: "Thu" },
        { dayNumber: 27, dayName: "Fri" },
        { dayNumber: 28, dayName: "Sat" },
        { dayNumber: 29, dayName: "Sun" },
    ])

    const handleOnClickItem = (tag) => {
        setSelectedIndex(tag)
    }

    return (
        <View>
            <FlatList
                keyExtractor={(_, index) => index}
                data={dates}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ ...props.style }}
                renderItem={({ item, index }) => {
                    return (
                        <Animated.View
                            entering={FlipInXUp.duration(100).delay(index * 100)}
                        >
                            <DateCarouselItem
                                tag={index}
                                selected={index == selectedIndex}
                                date={item}
                                onPress={handleOnClickItem}
                            />
                        </Animated.View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    carouselItem: {
        flexDirection: "column",
        paddingHorizontal: 15,
        paddingVertical: 18,
        borderWidth: 0.2,
        borderColor: "gray",
        borderRadius: 5,
        marginHorizontal: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    dayName: {
        color: "gray",
        fontSize: 12
    },
    dayNumber: {
        color: "gray",
        fontSize: 14
    }
})

const selectedStateStyles = StyleSheet.create({
    carouselItem: {
        ...styles.carouselItem,
        color: "#908986",
        borderColor: "#908986",
        borderWidth: 1,
    },
    dayName: {
        ...styles.dayName,
        color: "black",
    },
    dayNumber: {
        ...styles.dayName,
        color: "black",
    }
})

export default DateCarousel;