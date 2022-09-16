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
import '../Pages/home.css';
import add from "../img/11.png";
const Home = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const logout = (e) => {


    props.logout();
    AsyncStorage.setItem("loggedUser", JSON.stringify(null))
    props.navigation.navigate("Login")
    console.log(AsyncStorage.getItem("loggedUser"));

    console.log(props.loggedUser)

  }
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
      <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card"> 
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container"> 
          
						<img src={add} class="brand_logo" alt="Logo"/>
             <h1><font color="00BFBA">Bienvenue</font></h1>
					</div>
				</div>
        
				<div class="d-flex justify-content-center form_container">
        
				</div>
        <div class="d-flex justify-content-center mt-10 lo_container">
        <button type="button"  class="btn lo_btn"onClick={() => props.navigation.navigate("AddPatient")} >Créer un dossier patient</button>
        </div>
        <div class="d-flex justify-content-center mt-10 lo_container">
        <button type="button"  class="btn lo_btn" onClick={() => props.navigation.navigate("SearchPatient")}>Rechecher un dosier patient</button>
        </div>
        <div class="d-flex justify-content-center mt-10 lo_container">
        <button type="button"  class="btn lo_btn" onClick={() => props.navigation.navigate("AppM")}>modèle</button>
        </div>
        <div class="d-flex justify-content-center mt-35 log_container">
        <button type="button"  class="btn log_btn" onClick={logout}>Deconnexion</button>
        </div>
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
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout
};

export default connect(mapStateToProps, mapActionToProps)(Home);
