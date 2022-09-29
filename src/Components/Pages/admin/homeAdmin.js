import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormCheckBox from "../../Form/CheckBox";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text } from 'react-native';
import { AsyncStorage } from 'AsyncStorage';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import "bootstrap/dist/css/bootstrap.min.css";
import '../home.css';
import Scroll from "react-scroll";
import  CsvDownload  from "react-json-to-csv";

const HomeAdmin = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)




    
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


  return (
<div class="big">
    <div style={mystyle}>
<div class="d-flex justify-content-center h-100">
<div class="login-page">
		<div class="image-conteiner">
			<div class="image">
				<img src="https://cdn.pixabay.com/photo/2017/01/31/22/06/boy-2027615_960_720.png"/>
			</div>
		</div>
		<div class=" col-mt-8 title">
			<h5>Bienvenue à la plate-forme SARS-COV2 et autre maladie infectieuse</h5>
		</div>
    
        <div class="d-flex justify-content-center mt-10 lin_container">
        <button type="button"  class="btn lin_btn" onClick={() => props.navigation.navigate("Patient")}>Patient</button>
        </div>
        <div class="d-flex justify-content-center mt-10 lin_container">
        <button type="button"  class="btn lin_btn" onClick={() => props.navigation.navigate("FilePatient")}>File patient</button>
        </div>
        <div class="d-flex justify-content-center mt-10 lin_container">
        <CsvDownload
    data={props.patientList1}
    filename="csv_data.csv"
    style={{ //pass other props, like styles
      boxShadow:"inset 0px 1px 0px 0px #e184f3",
      background:"linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
      backgroundColor:"#c123de",
      borderRadius:"6px",
      border:"1px solid #a511c0",
      display:"inline-block",
      cursor:"pointer","color":"#ffffff",
      fontSize:"15px",
      fontWeight:"bold",
      padding:"6px 24px",
      textDecoration:"none",
      textShadow:"0px 1px 0px #9b14b3"
      }}
  >
    CSV Data ✨
  </CsvDownload>
  </div>
  <div class="d-flex justify-content-center mt-10 lin_container">
        <button type="button"  class="btn lin_btn" onClick={() => props.navigation.navigate("Open")}>Retour</button>
        </div>
  </div>
  </div>
  </div>
  </div>
  
  );
};
const mystyle = {
      color: "white",

      backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize: "cover"
    };
    const mapStateToProps = (state) => ({
      patientList1: state.medicalService.patientList1
        });
    const mapActionToProps = {
      all: actions.allPatient
        };

export default  connect(mapStateToProps, mapActionToProps)(HomeAdmin);