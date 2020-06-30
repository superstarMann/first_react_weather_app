import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";

export default function Loading () {
    return (
        <View style ={styles.container}>
            <StatusBar barStyle = "dark-content"/>
          <Text style ={styles.text}>날씨 만드는 중!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: "flex-end",
       paddingHorizontal: 20,
       paddingVertical: 100,
       backgroundColor: "#fdf6aa"
    },
    text: {
        fontSize: 25
    }
});