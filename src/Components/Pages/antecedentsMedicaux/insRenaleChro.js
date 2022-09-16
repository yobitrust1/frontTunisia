import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import FormButton1 from "../../Form/FormButton1";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import oo from "../../img/web08.png";
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

const InsRenaleChro = (props) => {

  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);
  const [hemodialyse, setHemodialyse] = useState(true);

  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }
  var handleHemodialyseChange = (data) => {
      setHemodialyse(data.target.value)
  }
  var handleSubmit = (e) => {
    var values = {
      antecedent: "InsRenaleChro",
      anciennete: anciennete,
      traitement: traitement,
      hemodialyse: hemodialyse
    }
    e.preventDefault();
    //console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux")
  }




  return (
<div class="big">
  
  <div class="d-flex md-0  py-0 ">
  <img src={oo} />
  </div>
  <div class="j1j">
        <Container >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Insuffisance rénale chronique</Text>

        <FormInput title="Ancienneté" placeholder="Ancienneté" onChangeText={handleAnciennteChange} type="decimal-pad"  type="number"  />
        <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />

        <View style={styles.row}>
        <div  onChange={handleHemodialyseChange}>
        <Text style={tailwind('text-gray-700 py-2')}>Hémodialyse?</Text>
          <input type="radio" value={true} name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
          <input type="radio" value={false} name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
        </div>
        </View>

        <View style={styles.row}>
          <FormButton1 title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux") }} />
          <FormButton1 title="Enregister" onPress={handleSubmit} />

        </View>



      </View>
      </Container>
</div>
</div>
  );
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
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};

export default connect(mapStateToProps, mapActionToProps)(InsRenaleChro);
