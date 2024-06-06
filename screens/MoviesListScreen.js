import React from "react";
import { FlatList } from "react-native";
import Row from "../components/Row";

const renderItem = obj => <Row {...obj.item} />

const MoviesListScreen = ({route}) => {
    
    const movies = route.params.Movies.Search;

    return (
        <FlatList
        renderItem={renderItem}
        data={movies} 
        /> 
    )
    }


export default MoviesListScreen