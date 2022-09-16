import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { View} from 'react-native';
import InputMask from 'react-input-mask';

const FormInput3 = (props) => {
  return (

    <>
      <View style={tailwind('w-1/2 items-center')}>
      <div >
              <InputMask style={tailwind('border  border-blue-800 my-3  rounded-md w-64')} placeholder={props.placeholder} maskChar="" mask={props.mask} onChange={(text) => props.onChangeText(text.target.value)} ></InputMask>
              </div>
      </View>


    </>
  );
};

export default FormInput3;
