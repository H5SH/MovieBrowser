import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import MoviesListScreen from "../screens/MoviesListScreen";
import DetailsScreen from "../screens/Detailsscreen";
import SearchScreen from "../screens/SearchScreen";



const Stack = createStackNavigator()

const MainStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name='List' component={MoviesListScreen} />
            <Stack.Screen name="Details" options={({route}) => ({'title': route.params.Actors})} component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)


export default MainStack
