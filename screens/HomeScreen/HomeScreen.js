import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    Button,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    Picker,
    Switch,
    TouchableOpacity,
    Slider,
} from "react-native";
import {HomeScreenField} from "../../components/HomeScreen/HomeScreenField"
import {HomeScreenHeader} from "../../components/HomeScreen/HomeScreenHeader"

export const HomeScreen = () => {
   
    return (
   <View style={styles.container}>
      <HomeScreenHeader/>
      <HomeScreenField/>
   </View>
    )
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        left:20,
		top:40,
        
	},
	
});