import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { Button, TouchableOpacity, Text, View, TextInput, ShadowPropTypesIOS } from 'react-native';
const FormInput = (props) => {
  return (

    <>
      <View style={tailwind('w-1/2 items-center')}>
        
          <input style={tailwind('border  border-blue-800 my-3  rounded-md w-64')} 
          type={props.type} 
          placeholder={props.placeholder} 
          min={props.min}
          max={props.max}
          maxLength={30}
          //error={text > 12 ? 'Enter a number less than 12' : ''}
          onChange={(text) => props.onChangeText(text.target.value)}/>
      </View>
    

    </>
  );
};

export default FormInput;
