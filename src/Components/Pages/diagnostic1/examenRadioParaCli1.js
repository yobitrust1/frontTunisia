import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton4 from "../../Form/FormButton4";
import FormInput from "../../Form/FormInput";
import FormInput4 from "../../Form/FormInput4";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormCheckBox from "../../Form/CheckBox";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
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




   
const ExamenRadioParaCli = (props) => {

  const [type, setType] = useState("Thorax")
  const [datePr, setDatePr] = useState()
  const [result, setResult] = useState("Normale")
  const [espaceQT, setEspaceQT] = useState()
  const [aspect, setAspect] = useState()
  const [nbQua, setNbQua] = useState()

  var handleCheckBoxChange = (newValue, text) => {
    if (newValue === true) setResult(result + text + " ")
    else { setResult(result.replace(text + " ", "")) }

  }


  var handleResultChange = (data) => {
     setResult(data.target.value) }
  var handleTypeChange = (data) => {
    if (data.target.value==="0") {
      setType("Thorax")
      setDatePr()
      setResult("Normale")
    }

    if (data.target.value==="1") {
      setType("TdmTho")
      setDatePr()
      setResult("")
    }

    if (data.target.value==="2") {
      setType("ECG")
      setDatePr()
      setResult("")
    }


  }
  var handleTypeSdate = (data) => {
    setDatePr(data.target.value)
    }
  var handleSubmit = () => {
    var values = {
      type: type,
      datePr: datePr,
      result: result,
      espaceQT: espaceQT,
      aspect: aspect,
      nbQua: nbQua,
      datepr: datePr
    }
    props.addExamRadioParaCli(props.patientList["cin"], values)
    props.navigation.navigate("ExamenRadioParaCli1")
    console.log(values)

  }


  return (

<div class="big13">
      
      <div class="d-flex justify-content-between  mb-3">
      <div class="float-left d-flex p-2" >

<Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >
    <View>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Examens radiologiques et para-cliniques</Text>
     
      <View style={tailwind(' items-center ')} >
      <div>
      <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Ajouter un examen?</Text>
    <div>  <input  onChange={handleTypeChange} type="radio" value="0" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Radio Thorax</Text></div>
    <div>  <input  onChange={handleTypeChange} type="radio" value="1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>TDM thoracique</Text></div>
    <div>  <input  onChange={handleTypeChange} type="radio" value="2" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>ECG</Text></div>
    </div>
    </View>
      <View style={tailwind("items-center")}>
      <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
     

      </View>
      {
        type === "Thorax" && <View style={tailwind("items-center py-2")}>
          <div>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Radio Thorax</Text>
        <div>  <input  onChange={handleResultChange} type="radio" value="Normale" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Normale</Text></div>
        <div>  <input  onChange={handleResultChange} type="radio" value="Opacité alvéolaire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Opacité alvéolaire</Text></div>
        <div>  <input  onChange={handleResultChange} type="radio" value="Opacité interstitielle" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Opacité interstitielle</Text></div>
        </div>
          <FormInput4 placeholder="Nb de quadrants atteints" min={0}   max={1000} onChangeText={setNbQua} />
        </View>
      }
      { 
        type === "TdmTho" && <View  >


          <Text style={tailwind("font-bold py-4 text-xl text-gray-700 text-center")}>TDM thoracique</Text>



          <View style={tailwind("items-center py-2")}>
            <View>
            <FormCheckBox text="Normale" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte alvéolaire" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte interstitielle"  value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte bilatérale"  value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte unilatérale"  value={false} onPress={handleCheckBoxChange} />

            </View>
          </View>



          <View style={tailwind('items-center')}>
            <FormInput placeholder="Aspect en verre dépoli"  onChangeText={setAspect} />

          </View>
        </View>
      }
      {
        type === "ECG" && <View >
          <Text style={tailwind("font-bold py-4 text-xl text-gray-700 text-center")}>ECG</Text>
          <View style={tailwind("items-center")}>
            <View>
            <FormCheckBox text="Normale" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Troubles de la repolarisation" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Troubles du rythme"  value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Bloc auriculo vantriculaire"  value={false} onPress={handleCheckBoxChange} />
            </View>
          </View>
          <View style={tailwind("items-center")}>
            <FormInput4 placeholder="Espace Qt"   min={0}   max={1000000000}  onChangeText={setEspaceQT} />

          </View>

        </View>
      }
      <View style={tailwind("items-center")}>
        <View style={styles.row}>
          <FormButton4 title="Retour" onPress={() => props.navigation.navigate("ExamenCliniques1")} />
          <FormButton4 title="Enregistrer" onPress={() => { handleSubmit(); notify();}} />

        </View>
        <FormButton4 title="Suivant" onPress={() => props.navigation.navigate("ExamBio1")} />
      </View>
      <div><Toaster /></div>
    </View>
    </Container>
    </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={8} /> </div>


      
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
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout,
  addExamRadioParaCli: actions.addExamRadioParaCli
};
export default connect(mapStateToProps, mapActionToProps)(ExamenRadioParaCli);
