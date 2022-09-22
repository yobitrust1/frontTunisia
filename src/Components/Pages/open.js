
import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormCheckBox from "../Form/CheckBox";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text } from 'react-native';
import { AsyncStorage } from 'AsyncStorage';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import "bootstrap/dist/css/bootstrap.min.css";
import ann from "../img/hh.png";
import SARS from "../img/MMM.png";
import './home.css';
const Open = (props) => {
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

    <div style={mystyle}>
     <div class="container login-container">
     <div class="row">
        <div class="col-md-5 ads">
          <h4><span id="fl">Bienvenue</span><span id="sl"> à la plate-forme SARS-COV2 et autre maladie infectieuse </span></h4>
        </div>
        <div class="col-md-6 login-form">
          <div class="profile-img">
            <img src={ann} alt="profile_img" height="140px" width="140px"/>
        </div>
        
        <div class="d-flex justify-content-center mt-10 log_container">
        <button type="button"  class="btn log_btn" onClick={() => props.navigation.navigate("Admin")}>Admin</button>
        </div>
        <div class="d-flex justify-content-center mt-10 log_container">
        <button type="button"  class="btn log_btn" onClick={() => props.navigation.navigate("Login")} >User</button>
        </div>
      </div>
    </div>
     </div>
     <div class="profile-img1">
     <img src={SARS} alt="profile_img1" height="140px" width="140px"/>
     </div>
<ParticlesBg color="#9acfce" num={200} type="cobweb" bg={true} />
</div>

  );
};
const mystyle = {
      color: "white",

      backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize: "cover"
    };


export default Open;
