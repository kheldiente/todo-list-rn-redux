import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import PrimaryHeader from "../../component/PrimaryHeader";
import DateCarousel from "./DateCarousel";

const CalendarScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            style={{
                ...styles.container,
                paddingTop: insets.top + 10,
                paddingBottom: insets.bottom + 10,
            }}
            edges={["right", "left"]}
        >
            <PrimaryHeader
                title={"Calendar"}
                subtitle={"26 Dec"}
                key={"calendar+header"}
                style={styles.header}
            />
            <DateCarousel style={{ marginTop: 20 }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
})

export default CalendarScreen;