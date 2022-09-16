import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { Text, View, TextInput, StyleSheet } from 'react-native';
const FormInput = (props) => {
  return (


    <View style={tailwind("items-center")}>
    <View style={styles.row}>
    <Text style={tailwind("py-6 mx-2 ")}>          </Text>
    
    <input style={tailwind('border  border-blue-800 my-3  rounded-md w-1/3 h-10')} 
          type={props.type} 
          placeholder1={props.placeholder} 
          min={props.min}
          max={props.max}
          maxLength={30}
          //error={text > 12 ? 'Enter a number less than 12' : ''}
          onChange={(text) => props.onChangeText1(text.target.value)}/>
      <Text style={tailwind("py-6 mx-2 ")}>/</Text>
      <input style={tailwind('border  border-blue-800 my-3  rounded-md w-1/3 h-10')} 
          type={props.type} 
          placeholder2={props.placeholder} 
          min={props.min}
          max={props.max}
          maxLength={10}
          //error={text > 12 ? 'Enter a number less than 12' : ''}
          onChange={(text) => props.onChangeText2(text.target.value)}/>
    </View>
</View>

  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});

export default FormInput;
