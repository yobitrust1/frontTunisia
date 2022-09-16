import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton2 from "../../Form/FormButton2";
import FormButton0 from "../../Form/FormButton0";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import FormInput from '../../Form/FormInput';
import FormInput4 from '../../Form/FormInput4';
import FormInput3 from '../../Form/FormInput3';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
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

const HabitudesDeVie1 = (props) => {
    useEffect(() => {
    })
    const [tabagisme, setTabagisme] = useState(false)
    const [nbCigarettes, setNbCigarettes] = useState(0)
    const [freqChicha, setFreqChicha] = useState(0)
    const [drogue, setDrogue] = useState(false)
    const [alcool, setAlcool] = useState(false)
    const [gs, setGs] = useState(0)
    const [poids, setPoids] = useState(0)
    const [taille, setTaille] = useState(0)


    var handleAlcoolChange = (data) => {
      if (data.target.value==="Oui")
        setAlcool(true)
      if (data.target.value==="Non")
        setAlcool(false)
    }
    var handleDrogueChange = (data) => {
      if (data.target.value==="Oui")
        setDrogue(true)
      if (data.target.value==="Non")
        setDrogue(false)
    }
    var handleTabagismeChange = (data) => {
      if (data.target.value==="Oui")
        setTabagisme(true)
      if (data.target.value==="Non")
        setTabagisme(false)
    }
    var handleNbCigarettesChange = (data) => {
        setNbCigarettes(data)
    }
    var handleFreqChichaChange = (data) => {
        setFreqChicha(data)
    }
    var handleGsChange = (data) => {
        setGs(data)
    }
    var handlePoidsChange = (data) => {
        setPoids(data)
    }
    var handleTailleChange = (data) => {
        setTaille(data)
    }
    var handleSubmit = (e) => {
        var values = {
            poids: poids,
            taille: taille,
            gs: gs,
            alcool: alcool,
            drogue: drogue,
            nbCigarettes: nbCigarettes,
            freqChicha: freqChicha
        }
        console.log(values)
        e.preventDefault();
        props.habitudesDeViePatient(props.patientList["cin"], values)
        props.navigation.navigate("ConfirmationDiag1")
    }

    return (
        <div class="big01">
      
        <div class="d-flex justify-content-between  mb-3">
        <div class="float-left d-flex p-2" >
    <Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Habitudes De Vie</Text>
                <View style={styles.row}>
                   <View style={styles.row}>
                   <div  >
                    <Text style={tailwind('text-gray-700 py-2')}>Tabagisme ?</Text>
                    <input onChange={handleTabagismeChange} type="radio" value="Non" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
                    <input onChange={handleTabagismeChange} type="radio" value="Oui" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
                   </div>
                </View>
                </View>

                <View>{tabagisme == true && (
                  <View style={tailwind("items-center")}>

                            <FormInput4 placeholder="Nombre de cigarettes/jour"
                                min={0}   max={300}
                                onChangeText={handleNbCigarettesChange}
                            />


                            <FormInput4 placeholder="Frequence de Chicha/semaine"
                                min={0}   max={10}
                                onChangeText={handleFreqChichaChange}
                            />
                        </View>

                    )}

                </View>
                <View style={styles.row}>
                    <div  >
                    <Text style={tailwind('text-gray-700 py-2')}>Drogues/cannabis ?</Text>
                      <input onChange={handleDrogueChange} type="radio" value="Non" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
                      <input onChange={handleDrogueChange} type="radio" value="Oui" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
                    </div>


                </View>
                <View style={styles.row}>


                    <div  >
                    <Text style={tailwind('text-gray-700 py-2')}>Alcool ?</Text>
                      <input onChange={handleAlcoolChange} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
                      <input onChange={handleAlcoolChange} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
                    </div>


                </View>
                <FormInput3 mask="999" placeholder="Poids"
                    onChangeText={handlePoidsChange} />
                <FormInput3 mask="999" placeholder="Taille"
                    onChangeText={handleTailleChange} />
                <FormInput placeholder="GS"
                    onChangeText={handleGsChange} />
                <View style={styles.row}>
                    <FormButton0 title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
                    <FormButton0 title="Enregistrer" onPress={handleSubmit} />
                </View>
                <FormButton2 title="Suivant" onPress={() => { props.navigation.navigate("ConfirmationDiag1") }} />
            </View>
            </Container>
        </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={3} /> </div>


      
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
    habitudesDeViePatient: actions.habitudesDeViePatient

};

export default connect(mapStateToProps, mapActionToProps)(HabitudesDeVie1);
