import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    row: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center',
        padding: 20
    }
})

const Row = props => {
    const navigation = useNavigation();
    const getDetails = (id)=> {
        fetch(`https://omdbapi.com/?apikey=f96cdf02&i=${id}`)
        .then(response => response.json())
        .then(details => {
            navigation.navigate('Details',{
                Details: details,
                title: props.Title
                })
        })
        .catch(err => {
            console.log(err)
        })
    }
    // const getDetails = async(id)=>{
    //     try{
    //         const detail = await fetch(`https://omdbapi.com/?apikey=f96cdf02&i=${id}`)
    //         const details = await detail.json()
    //         console.log(details);
    //         navigation.navigate('Details',{
    //             Details: details,
    //             title: props
    //         })
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    return (
    <TouchableOpacity style={styles.row} onPress={()=>getDetails(props.imdbID)}> 
        <Text>
            {props.Title}
        </Text>
        </TouchableOpacity>
    )
}


export default Row