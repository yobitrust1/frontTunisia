import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton3 from "../../Form/FormButton3";
import FormButton5 from "../../Form/FormButton5";
import FormInput4 from "../../Form/FormInput4";


import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
import toast, { Toaster } from 'react-hot-toast';

  const notify = () => toast.success('Enregistrer', {
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



const ExamBio1 = (props) => {
  const [type, setType] = useState("NFS")
  const [datePr, setDatePr] = useState();
  //NFS
  const [gb, setGb] = useState()
  const [lym, setLym] = useState()
  const [pla, setPla] = useState()
  const [hb, setHb] = useState()
  const [ht, setHt] = useState()
  //BIlan renal
  const [creat, setCreat] = useState()
  const [clairCreat, setClairCreat] = useState()
  const [uree, setUree] = useState()

  //Bilan hepatique
  const [biliru, setBiliru] = useState()
  const [biliru1, setBiliru1] = useState()
  const [alat, setAlat] = useState()
  const [asat, setAsat] = useState()
  const [tp, setTp] = useState()
  const [facteurV, setFacteurV] = useState()
  const [fibrinogene, setFibrinogene] = useState()
  const [cpk_mb, setCpk_mb] = useState()
  const [troponine, setTroponine] = useState()
  const [pro_bnp, setPro_bnp] = useState()
  const [albumi, setAlbumi] = useState()
  const [d_dim??re, setD_dim??re] = useState()
  const [ldh, setLdh] = useState()
  const [crp, setCrp] = useState()
  const [procal, setProcal] = useState()
  const [ferri, setFerri] = useState()
  //GDSA
  const [ph, setPh] = useState()
  const [pao2, setPao2] = useState()
  const [paco2, setPaco2] = useState()
  const [hco3_, setHco3_] = useState()
  const [sao2, setSao2] = useState()

  //ionogramme
  const [nak, setNak] = useState()
  const [nak1, setNak1] = useState()
  const [nakUr, setNakUr] = useState()
  const [nakUr1, setNakUr1] = useState()
  //Autre
  const [fileName, setFileName] = useState()
  const [file, setFile] = useState()
  // controle de saisie
  const [test, setTest] = useState()


  var handleTypeSdate = (data) => {
    setDatePr(data.target.value)     
       }
       var handleTypeSdate1 = (data) => {
        setDatePr(data.target.value)     
           }
           var handleTypeSdate2 = (data) => {
            setDatePr(data.target.value)     
               }
               var handleTypeSdate3 = (data) => {
                setDatePr(data.target.value)     
                   }
                   var handleTypeSdate4 = (data) => {
                    setDatePr(data.target.value)     
                       }
  var handleSubmit = () => {
    
    var values = {
      datePr: datePr,
      type: type,
      gb: gb,
      lym: lym,
      pla: pla,
      hb: hb,
      ht: ht,
      creat: creat,
      clairCreat: clairCreat,
      uree: uree,
      ph: ph,
      paco2: paco2,
      pao2: pao2,
      hco3_: hco3_,
      sao2: sao2,
      nak: nak,
      nak1: nak1,
      nakUr: nakUr,
      nakUr1: nakUr1,
      biliru: biliru,
      biliru1: biliru1,
      alat: alat,
      asat: asat,
      tp: tp,
      facteurV: facteurV,
      fibrinogene: fibrinogene,
      cpk_mb: cpk_mb,
      troponine: troponine,
      pro_bnp: pro_bnp,
      albumi: albumi,
      d_dim??re: d_dim??re,
      ldh: ldh,
      crp: crp,
      procal: procal,
      ferri: ferri


    }
    //console.log(values)
    props.addExamBio(props.patientList["cin"], values)
    props.navigation.navigate("ExamBio1")

  }



  var handleTypeChange = (data) => {
      setType(data.target.value)
    setDatePr()

  }

  return (

<div class="big18">
<div class="d-flex justify-content-between  mb-3">
<div class="float-left d-flex p-2" >
<Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >
      <View style={tailwind("items-center")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Examens Biologiques</Text>
     
      <View style={tailwind("items-center")}>
      <div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="NFS" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>NFS</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="BilanRenal" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Bilan renal</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="BilanHepa" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Bilan hepatique</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="GDSA" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>GDSA</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="Ionogra" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Ionogramme</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="Autre" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Autres</Text></div>
      </div>
      </View>

      <Text style={tailwind("text-center text-red-500 py-4")}>{test !== undefined && test}</Text>


      {
        type === "NFS" && <View style={tailwind("items-center py-12")}>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
          <FormInput4 placeholder="GB"  onChangeText={setGb}   min={0}   max={10000}  />
          <FormInput4 placeholder="Lymphocyte" onChangeText={setLym}   min={0}   max={ 1000}  />
          <FormInput4 placeholder="Plaquette" onChangeText={setPla}   min={0}   max={1000000}  />
          <FormInput4 placeholder="Hb" onChangeText={setHb}   min={0}   max={20}  />
          <FormInput4 placeholder="Ht" onChangeText={setHt}   min={0}   max={1000000000}  />
          <FormButton title="Enregitrer" onPress={() => { handleSubmit(); notify();}}  min={0}   max={1000000000}  />

        </View>
      }
      {
        type === "BilanRenal" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          <FormInput4 placeholder="Creat" onChangeText={setCreat}   min={0}   max={10000}  />
          <FormInput4 placeholder="Clairance de la creat" onChangeText={setClairCreat}   min={0}   max={30}  />
          <FormInput4 placeholder="Ur??e" onChangeText={setUree}   min={0}   max={580}  />
          <FormButton title="Enregitrer" onPress={() => { handleSubmit(); notify();}}/>
        </View>
      }
      {
        type === "GDSA" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
        
          <FormInput4 placeholder="pH" onChangeText={setPh}   min={0}   max={15}  />
          <FormInput4 placeholder="PaO2" onChangeText={setPao2}   min={0}   max={100}  />
          <FormInput4 placeholder="PaCO2" onChangeText={setPaco2}   min={0}   max={3}  />
          <FormInput4 placeholder="HCO3-" onChangeText={setHco3_}   min={0}   max={26}  />
          <FormInput4 placeholder="SaO2" onChangeText={setSao2}   min={0}   max={100}  />
          <FormButton title="Enregitrer" onPress={() => { handleSubmit(); notify();}}/>

        </View>
      }
      {
        type === "BilanHepa" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate2}/>
        
          <FormInput4 placeholder="Bilirubine (T)" onChangeText={setBiliru}   min={0}   max={8}  />
          <FormInput4 placeholder="Bilirubine (D)" onChangeText={setBiliru1}   min={0}   max={8}  />
          <FormInput4 placeholder="ALAT" onChangeText={setAlat}   min={0}   max={41}  />
          <FormInput4 placeholder="ASAT" onChangeText={setAsat}   min={0}   max={40}  />
          <FormInput4 placeholder="TP" onChangeText={setTp}   min={0}   max={200}  />
          <FormInput4 placeholder="Facteur V" onChangeText={setFacteurV}   min={0}   max={1000000000}  />
          <FormInput4 placeholder="Fibrinogene" onChangeText={setFibrinogene}   min={0}   max={10}  />
          <FormInput4 placeholder="CPK-MB" onChangeText={setCpk_mb}   min={0}   max={1000000000}  />
          <FormInput4 placeholder="Troponine" onChangeText={setTroponine}   min={0}   max={100}  />
          <FormInput4 placeholder="Pro BNP" onChangeText={setPro_bnp}   min={0}   max={2000}  />
          <FormInput4 placeholder="ALbumin??mie" onChangeText={setAlbumi}   min={0}   max={60}  />
          <FormInput4 placeholder="D-Dim??re" onChangeText={setD_dim??re}   min={0}   max={5000}  />
          <FormInput4 placeholder="LDH" onChangeText={setLdh}   min={0}   max={1000}  />
          <FormInput4 placeholder="CRP" onChangeText={setCrp}   min={0}   max={10}  />
          <FormInput4 placeholder="Procalcitonine" onChangeText={setProcal}   min={0}   max={10}  />
          <FormInput4 placeholder="FErritinemie" onChangeText={setFerri}   min={0}   max={600}  />
          <FormButton title="Enregitrer" onPress={() => { handleSubmit(); notify();}}/>


        </View>
      }
      {
        type === "Ionogra" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate3}/>
        
          <FormInput4 placeholder="Na+" onChangeText={setNak}   min={0}   max={200}  />
          <FormInput4 placeholder="K+" onChangeText={setNak1}   min={0}   max={10}  />
          <FormInput4 placeholder="Na+ urinaire" onChangeText={setNakUr}   min={0}   max={200}  />
          <FormInput4 placeholder="K+ urinaire" onChangeText={setNakUr1}   min={0}   max={10}  />
          <FormButton3 title="Enregistrer" onPress={() => { handleSubmit(); notify();}}/>

        </View>
      }
      {
        type === "Autre" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate4}/>
        
        </View>
      }
      <View style={tailwind("items-center py-12")}>
      <FormButton5 title="Retour" onPress={() => props.navigation.navigate("ExamenRadioParaCli1")} />
        <FormButton5 title="Suivant" onPress={() => props.navigation.navigate("Traitement1")} />
      </View>
      <div><Toaster /></div>
      </View>
      </Container>
      </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={9} /> </div>


      
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
  addExamBio: actions.addExamBio
};
export default connect(mapStateToProps, mapActionToProps)(ExamBio1);
