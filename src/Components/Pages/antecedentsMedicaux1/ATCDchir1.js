import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';




import FormInput from "../../Form/FormInput";

import FormButton8 from "../../Form/FormButton8";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import add from "../../img/11.png";
import '../home.css';


  


const ConfirmationDiag = (props) => {
 
  const [ATCD, setATCD] = useState("");


  var handleATCDChange = (text) => {
    setATCD(text)
  }


  var handleSubmit = (e) => {
    var values = {
      antecedent: "ATCDchir",
      atcd: ATCD
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }


  return (
    <div class="big">
    <div style={mystyle}>
    <div class="container h-100">
     <div class="d-flex justify-content-center h-10">
    <div class="user_card"> 
    <div class="d-flex justify-content-center">
    <div class="brand_logo_container"> 
          <img src={add} class="brand_logo" alt="Logo"/>
    </div>
    </div>
    <div class="d-flex justify-content-center form_container">
    </div>
    <div class="d-flex justify-content-center mt-10 lo_container">
<Container >

      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-danger-1000 font-bold py-2 text-xl')}>ATCD chirurgicaux</Text>

        <FormInput placeholder="ATCD chirurgicaux" onChangeText={handleATCDChange} />



        <View style={styles.row}>
          <FormButton8 title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
          <FormButton8 title="Enregister" onPress={handleSubmit} />

        </View>
      </View>
    
      </Container>
      </div>  
      </div>
      </div>
      </div>  
      </div>
      </div>
  );
};
const mystyle = {
  

  backgroundposition: "center",
  backgroundrepeat: "no-repeat",
  backgroundsize: "cover"
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    flexDirection: "row",
    padding: 10   
  },
});
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};

export default connect(mapStateToProps, mapActionToProps)(ConfirmationDiag);
