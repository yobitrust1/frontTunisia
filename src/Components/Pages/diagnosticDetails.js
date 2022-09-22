import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormButton1 from "../Form/FormButton1";
import FormButton0 from "../Form/FormButton0";
import FormButton2 from "../Form/FormButton2";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text } from 'react-native';
//import 'localstorage-polyfill';
import { medicalService } from '../../Reducers/medicalService';
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
const DiagnosticDetails = (props) => {
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
      var handleSubmit = () => {
        props.removepConfDiags(props.patientList["cin"])
      }
      var handleSubmit1 = () => {
        props.removepAdmissions(props.patientList["cin"])
      }
      var handleSubmit2 = () => {
        props.removepCaracCliniques(props.patientList["cin"])
      }
      var handleSubmit3 = () => {
        props.removepExamenCli(props.patientList["cin"])
      }

      var handleSubmit4 = () => {
        props.removepExamRadio_ParaCli(props.patientList["cin"])
      }
      var handleSubmit5 = () => {
        props.removepExamBio(props.patientList["cin"])
      }
      var handleSubmit6 = () => {
        props.removepTraitement(props.patientList["cin"])
      }
      var handleSubmit7 = () => {
        props.removepExpoRisque(props.patientList["cin"])
      }
      var handleSubmit8 = () => {
        props.removepEvoluationQuo(props.patientList["cin"])
      }
      var handleSubmit9 = () => {
        props.removepEvaluationFinale(props.patientList["cin"])
      }
      

    return (
      


 <div class="big0az">
  
    <div class="d-flex justify-content-center  mb-3" >
   
    <div class="float-left d-flex p-2" >
   
          <Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs">
            <div  >
               
                <div >
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Confirmation diagnostique" onPress={() => { props.navigation.navigate("ConfirmationDiagOpen") }} />
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit(); notify();}}><i class="col-sm-5 fas fa-trash-alt"></i> Supprimer<Toaster /></button> </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Admission" onPress={() => { props.navigation.navigate("Admission") }} />
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit1(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Caractéristiques cliniques" onPress={() => { props.navigation.navigate("CaracCliniques") }} />
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit2(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Examens cliniques" onPress={() => { props.navigation.navigate("ExamenCliniques") }} />
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit3(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Examens radiologiques et para-cliniques" onPress={() => props.navigation.navigate("ExamenRadioParaCliOpen")} />
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit4(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Examens biologiques" onPress={() => props.navigation.navigate("ExamBioOpen")} />
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit5(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Traitement" onPress={()=>props.navigation.navigate("Traitement")}/>
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit6(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Exposition" onPress={()=>props.navigation.navigate("Exposition")}/>
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit7(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Evolution"  onPress={()=>props.navigation.navigate("Evolution")}/>
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit8(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>                    </div>
                    <div class="row justify-content-center">
                    <div class="col-sm-6 ">
                    <FormButton0 title="Evaluation finale" onPress={() => props.navigation.navigate("EvaluationFinale")} />
                    </div><div class="col-sm-6"><button class="btn lo_btn" onClick={() => { handleSubmit9(); notify();}}><i class="col-sm-4 fas fa-trash-alt"></i> Supprimer</button> </div>
                    </div>
                </div>





            <div >
                <FormButton0 title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />

            </div>
            </div>
            </Container>
</div>
<ParticlesBg color="#9acfce" num={200} type="cobweb" bg={true} />
</div>
</div>

    );
};

const mapStateToProps = (state) => ({
    patientList: state.medicalService.patientList,
    diagnosticList: state.medicalService.diagnosticList,
});
const mapActionToProps = {
  removepConfDiags: actions.removepConfDiags,
  removepExamBio: actions.removepExamBio,
  removepCaracCliniques: actions.removepCaracCliniques,
  removepAdmissions: actions. removepAdmissions,
  removepExamenCli: actions. removepExamenCli,
  removepExamRadio_ParaCli: actions. removepExamRadio_ParaCli,
  removepEvaluationFinale: actions. removepEvaluationFinale,
  removepTraitement: actions. removepTraitement,
  removepEvoluationQuo: actions. removepEvoluationQuo,
  removepExpoRisque:actions.  removepExpoRisque
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});
export default connect(mapStateToProps, mapActionToProps)(DiagnosticDetails);
