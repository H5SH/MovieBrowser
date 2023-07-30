import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = ({route}) => {
    const navigation = useNavigation()
    const details = route.params.Details
    navigation.setOptions({'title': route.params.title})
       return (
        <View>
            <Text>Actor: {details.Actors}</Text>
            <Text>Director: {details.Director}</Text>
            <Text>Genre: {details.Genre}</Text>
            <Text>Writer: {details.Writer}</Text>
            <Text>Year: {details.Year}</Text>
            <Text>Imdb Rating: {details.imdbRating}</Text>
            <Text>Plot: {details.Plot}</Text>
        </View>
       )
}


const styles = StyleSheet.create({
    details: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default DetailsScreen