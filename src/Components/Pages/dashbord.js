import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton0 from "../Form/FormButton0";
import FormButton2 from "../Form/FormButton2";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import man from "../img/ma.png";


const Dashbord = (props) => {
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
  
<div class="d-flex md-0  py-0 ">
<img src={man} />
</div>
<div class="mall">
      <Container >
            <View class="p-8" >
                <View class="se_container">
                    <FormButton0 title="Save File" onPress={() => { props.navigation.navigate("Dash1") }} />
                    <FormButton0 title="Dash2" onPress={() => { props.navigation.navigate("Dash2") }} />
                    <FormButton0 title="Dash3" onPress={() => { props.navigation.navigate("Dash3") }} />
                    <FormButton0 title="Dash4" onPress={() => { props.navigation.navigate("Dash4") }} />
                </View>
                <FormButton2 title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />
            </View>
            </Container>
</div>
</div>


    );
};

const mapStateToProps = (state) => ({
    patientList: state.medicalService.patientList
});
const mapActionToProps = {
};

export default connect(mapStateToProps, mapActionToProps)(Dashbord);