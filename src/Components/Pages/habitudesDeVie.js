import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import FormInput from '../Form/FormInput';
import FormInput4 from '../Form/FormInput4';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';


const HabitudesDeVie = (props) => {
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
        props.navigation.navigate("PatientDetails")
    }

    return (

        <div class="container register">
<div class="row">
<div class="col-md-3 register-left">
<img src="https://cdn.pixabay.com/photo/2017/01/31/22/07/african-2027619_960_720.png" alt="" />
<h3>Welcome</h3>
</div>
<div class="col-md-9 register-right">
<div class="tab-content" id="myTabContent">
<div class="container">
	<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-12 form-group">

		      <label class="labeltext">Tabagisme ?</label><br></br>
		          <div class="form-check-inline">

					<label class="customradio"><span class="radiotextsty">Oui</span>
					  <input type="radio" checked="checked" name="radio"/>
					  <span class="checkmark"></span>
					</label>        
					<label class="customradio"><span class="radiotextsty">Non</span>
					  <input type="radio" name="radio"/>
					  <span class="checkmark"></span>
					</label>

				</div>
        
		 
	</div>
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
  <div class="col-md-4 col-sm-4 col-xs-12 form-group">

		      <label class="labeltext">Drogues/cannabis ?</label><br></br>
		          <div class="form-check-inline">

					<label class="customradio"><span class="radiotextsty">Oui</span>
					  <input type="radio" checked="checked" name="radio"/>
					  <span class="checkmark"></span>
					</label>        
					<label class="customradio"><span class="radiotextsty">Non</span>
					  <input type="radio" name="radio"/>
					  <span class="checkmark"></span>
					</label>

				</div>
        
		 
	</div>
  <div class="col-md-4 col-sm-4 col-xs-12 form-group">

		      <label class="labeltext">Alcool ?</label><br></br>
		          <div class="form-check-inline">

					<label class="customradio"><span class="radiotextsty">Oui</span>
					  <input type="radio" checked="checked" name="radio"/>
					  <span class="checkmark"></span>
					</label>        
					<label class="customradio"><span class="radiotextsty">Non</span>
					  <input type="radio" name="radio"/>
					  <span class="checkmark"></span>
					</label>

				</div>
	</div>
  <div class="form-group">
    <label class="text-uppercase mt-15"></label>
    <input type="text" class="form-control md-5" placeholder="Poids"/>
  </div>
  
  <div class="form-group">
    <label  class="text-uppercase mt-15"></label>
    <input type="text" class="form-control md-5" placeholder="Taille"/>
  </div>
  <div class="form-group">
    <label  class="text-uppercase mt-15"></label>
    <input type="text" class="form-control md-5" placeholder="GS"/>
  </div>

  <div class="d-flex justify-content-center mt-20 ses_container">
        <button type="button"  class="btn ses_btn" onClick={handleSubmit} >Enregister</button>
        </div>
        <div class="d-flex justify-content-center mt-20 se_container">
        <button type="button"  class="btn se_btn" onClick={() => { props.navigation.navigate("PatientDetails") }}>Annuler</button>
        </div>
</div>
</div>
</div> 
</div>
</div>
<ParticlesBg color="#9acfce" num={200} type="cobweb" bg={true} />
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

export default connect(mapStateToProps, mapActionToProps)(HabitudesDeVie);
