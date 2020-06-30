import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"

const weatherOptions = {
    Rain: {
        iconName:"cloud-rain",
        gradient: ["#373B44","#4286f4"],
        weather_name: "☔",
        subtext: "우산 꼭 챙기기!"
    },
    Thunderstorm: {
        iconName: "bolt",
        gradient: ["#0F2027", "#203A43", "#f7797d"],
        weather_name: "⚡",
        subtext: "으악 번개 조심!"
    },
    Drizzle: {
        iconName: "cloud-sun-rain",
        gradient: ["#36D1DC", "#5B86E5"],
        weather_name: "💧",
        subtext: "상남자는 이슬비한테 안짐"
    },
    Snow:{
        iconName:"snowman",
        gradient:["#acb6e5", "#86fde8"],
        weather_name: "❄",
        subtext: "하늘에서 눈이 와요~"
    },
    Atmosphere: {
        iconName: "cocktail",
        gradient: ["#acb6e5", "#86fde8"],
        weather_name: "🌬",
        subtext: "바람 조심~"
    },
    Clear: {
        iconName:"sun",
        gradient: ["#C6FFDD", "#FBD786", "#f7797d"],
        weather_name: "🌞",
        subtext: "여행을 떠나요"
    },
    Clouds: {
        iconName: "cloud",
        gradient: ["#334d50","#cbcaa5"],
        weather_name: "🌂",
        subtext: "혹시 모르니깐?"
    },
    Haze: {
        iconName: "smoking",
        gradient: ["#334d50","#cbcaa5"],
        weather_name: "🌌",
        subtext: "안개 조심"
    },
    Mist: {
        iconName: "cloud-sun-rain",
        gradient: ["#36D1DC", "#5B86E5"],
        weather_name: "🚘",
        subtext: "조금은 조심하세요"
    },
    Dust: {
        iconName: "industry",
        gradient: ["#B79891","#94716B"],
        weather_name: "🌆",
        subtext: "중국이 이걸 또!"
    }

};

export default function Weather ({temp, condition}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style = {styles.container}>
        <StatusBar barStyle= "light-content"/>
        <View style= {styles.halfcontainer}>
        <FontAwesome5 name = {weatherOptions[condition].iconName} size={60} color ="white"></FontAwesome5>
        <Text style = {styles.temp}>{temp}°</Text>
        </View>
        <View style ={styles.halfcontainer}>
        <View style ={styles.halfandhalfcontainer}>
        <Text style = {styles.weather_name}>{weatherOptions[condition].weather_name}</Text>
        <Text style = {styles.subtext}>{weatherOptions[condition].subtext}</Text>
        </View>
        </View>
        </LinearGradient>      
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", //천둥번개~ //
        "Drizzle", // 이슬비
        "Rain", // 비가 와요~
        "Snow", // 눈도 와요~
        "Atmosphere", //대기현상인데 안해도 될듯
        "Clear", // 이야 날씨 좋다!
        "Clouds", // 먹구름 혹시모르니 우산 챙길까?
        "Haze", //헤이즈 라능~ 안개
        "Mist", // 조그만한 안개
        "Dust" //이야 중국이 이걸~
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`
    },

    temp:{ fontSize: 25,
          paddingTop: 15,
          color: "white"
    },
    weather_name: {
       color: "white",
       fontSize: 50,
       fontWeight:"bold",
       marginLeft: 70,
       paddingBottom: 50
    },
    subtext:{
          fontWeight: "300",
          fontSize: 30,
          color: "white"
    },
    halfandhalfcontainer: {
        marginBottom: 300
    }
    ,
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
