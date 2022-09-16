import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text} from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import FormButton3 from "../../Form/FormButton3";
import s from "../../img/sa.png";
const Information = (props) => {
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
    <img src={s} />
    </div>
    <div class="gg1">
          <Container >
            <View style={tailwind(' items-center ')} >

                <View style={tailwind('py-24')}>
                    <FormButton3 title="Informations générales" onPress={() => { props.navigation.navigate("InfosGenerales2") }} />
                    <FormButton3 title="Habitudes de vie" onPress={() => { props.navigation.navigate("HabitudesDeVie") }} />
                    <FormButton3 title="Antécédents médicaux" onPress={() => { props.navigation.navigate("AntecendentsMedicaux") }} />
                    <FormButton3 title="Expositions a risque" onPress={() => { props.navigation.navigate("Exposition") }} />
                    <FormButton3 title="Diagnostics" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
                </View>
                <FormButton3 title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />
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
export default connect(mapStateToProps, mapActionToProps)(Information);
