import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput4 from "../../Form/FormInput4";
import FormButton from "../../Form/FormButton";

import FormButton7 from "../../Form/FormButton7";
import Container from '@material-ui/core/Container';
import NumericInput from 'react-numeric-input';
import '../home.css';
import Steps from "../../Form/Steps";
let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [.1, 0.9],
      position: "all",
      color: [ "#ff0000"],
      cross: "dead",
      random: 10
    };


const SearchPatient1 = (props) => {
  var test=JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    props.search(search,test.username)
  }, [])


  const [search, setSearch] = useState(0)
  const [search2, setSearch2] = useState(0)

  const handleSearchChange = (text) => {
    setSearch(text)
    //console.log(search)
  }
  const handleSearch = () => {
    setSearch2(search)
    console.log(search)
    props.search(search,test.username)


  }
  return (
    <div class="bigla">
      
    <div class="d-flex justify-content-between  mb-3">
    <div class="float-left d-flex p-2" >
<Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >

      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Rechercher un patient</Text>
        <View style={tailwind('py-8 items-center')}>

          <FormInput4
            placeholder="Search...Type CIN"
            onChangeText={handleSearchChange}
            
            min={0}   max={1000000000}       />


          <FormButton7 title="Rechercher" onPress={handleSearch} />
          <View style={tailwind('py-8 items-center')}>
            <Text style={tailwind("text-red-500")}>
              {(search2 != 0) && ((typeof (props.patientList) === 'string' && props.patientList) ||
                (
                  <View style={tailwind('items-center')}>
                  <label class="form-label mx-4">Nom:{props.patientList["generalInformation"]["nom"]}</label>
                  <label class="form-label mx-4">prenom:{props.patientList["generalInformation"]["prenom"]}</label>
                    <FormButton7 title="Suivant" onPress={() => { props.navigation.navigate("Exposition1") }} />
                  </View>



                ))}

            </Text>

          </View>




        </View>

        <View style={styles.row}>
          <FormButton7 title="Ajouter un patient" onPress={() => { props.navigation.navigate("AddPatient"); }} />
          <FormButton7 title="Annuler" onPress={() => { props.navigation.navigate("Home"); }} />
        </View>
      </View>
      </Container>
        </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={1} /> </div>


      
</div>


</div>
  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  search: actions.searchPatient
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});

export default connect(mapStateToProps, mapActionToProps)(SearchPatient1);
