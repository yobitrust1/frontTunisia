import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import toast, { Toaster } from 'react-hot-toast';

  const notify = () => toast.success('Supprimer', {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });

const PatientDetails = (props) => {
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
        valuescolor: [ "#ff0000"],
        cross: "dead",
        random: 10
      };
      var handleSubmit = () => {
        console.log("lol")
        
        props.removepAntecedentMedical(props.patientList["cin"])
        
      }
      var handleSubmit1 = () => {
        props.removepInfosGenerales(props.patientList["cin"])
        console.log("lol")
      }
      var handleSubmit2 = () => {
        props.removepInfosGenerales(props.patientList["cin"])
      }
      var handleSubmit3 = () => {
        props.removepExpoRisque(props.patientList["cin"])
      }
   
     
    return (
        <div class="big">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
              <div class="user_card"> 
                  <div class="d-flex justify-content-center">
                      <div class="brand_logo_container"> 
            
                      <div class="fadeIn first">
      <img src="https://cdn.pixabay.com/photo/2020/12/18/00/43/medical-5840879_960_720.png" id="icon" alt="User Icon" />
    </div>
               
                      </div>
                  </div>
          
                  <div class="d-flex justify-content-center form_container">
          
                  </div>
                  
          <div class="row justify-content-center">
          <div class="col-sm-6 ">
          <button type="button"  class="btn lo_btn" onClick={() => { props.navigation.navigate("InfosGenerales") }}>Informations générales</button>
          </div><div class="col-sm-4"><button class="btn lo_btn" onClick={() => { handleSubmit1(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
         </div>
          
         <div class="row justify-content-center">
          <div class="col-sm-6 ">
            <button type="button"  class="btn lo_btn" onClick={() => { props.navigation.navigate("HabitudesDeVie") }}>Habitude de vie</button>
            </div><div class="col-sm-4"><button class="btn lo_btn" onClick={() => { handleSubmit2(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
         </div>

<div class="row justify-content-center">
          <div class="col-sm-6 ">
            <button type="button"  class="btn lo_btn" onClick={() => { props.navigation.navigate("AntecedentsList") }}>Anécédents médicaux</button>
            </div><div class="col-sm-4"><button class="btn lo_btn"  onClick={handleSubmit}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer<Toaster /></button> </div>
         </div>
          
          <div class="row justify-content-center">
          <div class="col-sm-6 ">
          <button type="button"  class="btn lo_btn" onClick={() => { props.navigation.navigate("Exposition") }}>Expositions a risque</button>
          </div><div class="col-sm-4"><button class="btn lo_btn" onClick={handleSubmit3}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
         </div>
          <div class="row justify-content-center">
          <div class="col-sm-6 ">
          <button type="button"  class="btn lo_btn" onClick={() => { props.navigation.navigate("DiagnosticDetails") }}>Diagnostics</button>
         </div></div>
          <div class="row justify-content-center">
          <div class="col-sm-6 p-4">
          <button type="button"  class="btn log_btn" onClick={() => { props.navigation.navigate("SearchPatient") }}>Retour</button>
          </div></div>
              </div>
          </div>
      </div>
  </div>

  
  
    );
  };

const mapStateToProps = (state) => ({
    patientList: state.medicalService.patientList
});
const mapActionToProps = {
  removepAntecedentMedical: actions.removepAntecedentMedical,
  removepInfosGenerales: actions. removepInfosGenerales,
  removepHabitudesDeVie: actions. removepHabitudesDeVie,
  removepConfDiags: actions.removepConfDiags,
  removepExpoRisque: actions.removepExpoRisque,
  removepExamBio: actions.removepExamBio,
  removepCaracCliniques: actions.removepCaracCliniques,
  removepAdmissions: actions. removepAdmissions,
  removepExamenCli: actions. removepExamenCli,
  removepExamRadio_ParaCli: actions. removepExamRadio_ParaCli,
  removepEvaluationFinale: actions. removepEvaluationFinale,
  removepTraitement: actions. removepTraitement,
  removepEvoluationQuo: actions. removepEvoluationQuo
};

export default connect(mapStateToProps, mapActionToProps)(PatientDetails);
