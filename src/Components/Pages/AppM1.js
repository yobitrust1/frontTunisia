import React, { useState, useEffect } from 'react';
import './home.css';
import FormInput from "../Form/FormInputt";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
function AppM() {
  const [prediction, setprediction] = useState();
  const [prediction2, setprediction2] = useState();
  const [laboratory_test_L, setLaboratory_test_L] = useState(0)
  const [laboratory_test_N, setLaboratory_test_N] = useState(0)
  const [laboratory_test_ESR, setLaboratory_test_ESR] = useState()
  const [laboratory_test_CRP, setLaboratory_test_CRP] = useState()
  const [laboratory_test_PCT, setLaboratory_test_PCT] = useState()
  const [laboratory_test_CK_MB, setLaboratory_test_CK_MB] = useState()
  const [laboratory_test_D_dimer, setLaboratory_test_D_dimer] = useState()
  const [laboratory_test_ALT, setLaboratory_test_ALT] = useState()
  const [laboratory_test_AST, setLaboratory_test_AST] = useState()
  const [laboratory_test_ALB, setLaboratory_test_ALB] = useState()
  const [laboratory_test_LDH, setLaboratory_test_LDH] = useState()
  const [age, setAge] = useState()
  const [cK, setCK] = useState()
  const [o2, setO2] = useState()
  const [symptoms_Cough, setSymptoms_Cough] = useState()
  const [symptoms_Dyspnea, setSymptoms_Dyspnea] = useState()
  const [symptoms_Fatigue, setSymptoms_Fatigue] = useState()
  var handle1Change = (text) => {
    setLaboratory_test_L(text)
}
var handle2Change = (text) => {
  setLaboratory_test_N(text)
}
var handle3Change = (text) => {
  setLaboratory_test_ESR(text)
}
var handle4Change = (text) => {
  setLaboratory_test_CRP(text)
}
var handle5Change = (text) => {
  setLaboratory_test_PCT(text)
}
var handle6Change = (text) => {
  setLaboratory_test_CK_MB(text)
}

var handle7Change = (text) => {
  setLaboratory_test_D_dimer(text)
}
var handle8Change = (text) => {
  setLaboratory_test_ALT(text)
}
var handle9Change = (text) => {
  setLaboratory_test_AST(text)
}
var handle10Change = (text) => {
  setLaboratory_test_ALB(text)
}
var handle11Change = (text) => {
  setLaboratory_test_LDH(text)
}
var handle12Change = (text) => {
  setAge(text)
}
var handle13Change = (text) => {
  setCK(text)
}
var handle14Change = (text) => {
  setO2(text)
}
var handle15Change = (data) => {
  if (data.target.value==="Oui")
  setSymptoms_Cough(true)
    else setSymptoms_Cough(false)
}
var handle16Change = (data) => {
  if (data.target.value==="Oui")
  setSymptoms_Dyspnea(true)
    else setSymptoms_Dyspnea(false)
}
var handle17Change = (data) => {
  if (data.target.value==="Oui")
  setSymptoms_Fatigue(true)
    else setSymptoms_Fatigue(false)
};
function get_prediction() {
  alert(prediction)};
function get_prediction2() {
    alert(prediction2)};  
useEffect(() => {
  fetch('https://lit-brook-43404.herokuapp.com/predict',{method:"POST",
  body :JSON . stringify({ 'Laboratory_test_L':laboratory_test_L, 'Laboratory_test_N':laboratory_test_N, 'Laboratory_test_ESR_(mm/hr)':laboratory_test_ESR, 'Laboratory_test_CRP_(mg/L)':laboratory_test_CRP, 'Laboratory_test_PCT_(ng/ml)':laboratory_test_PCT, 'Laboratory_test_CK_MB_(ng/ml)':laboratory_test_CK_MB, 'Laboratory_test_D_dimer_(ug/ml)':laboratory_test_D_dimer, 'Laboratory_test_ALT_(U/L)':laboratory_test_ALT, 'Laboratory_test_AST_(U/L)':laboratory_test_AST, 'Laboratory_test_ALB_(g/L)':laboratory_test_ALB, 'Laboratory_test_LDH_(U/L)':laboratory_test_LDH, 'Age':age, 'CK':cK, 'O2%':o2, 'Symptoms_Cough':symptoms_Cough, 'Symptoms_Dyspnea':symptoms_Dyspnea, 'Symptoms_Fatigue':symptoms_Fatigue,
})})
    .then(res => res.json())
      .then(data => {
        setprediction(data.pred);
        setprediction2(data.pred2);
        console.log(data)
      });
  });


   
  return (
    <section className="landing-background">
    <div style={{backgroundsize: "cover"}}>
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
        <MDBContainer  >
              <MDBRow>
                <MDBCol >
                  <MDBCard>
                  <form>
                  <h2 class="font-weight-bold text-center p-5 text-primary">les 17 variables du modèle</h2>
                  
       <FormInput placeholder="laboratory_test_L" type="number" onChangeText={handle1Change} required/>
       <FormInput placeholder="laboratory_test_N" type="number" onChangeText={handle2Change} required/>
       <FormInput placeholder="laboratory_test_ESR" type="number" onChangeText={handle3Change} required />
       <FormInput placeholder="laboratory_test_CRP" type="number" onChangeText={handle4Change} required />
       <FormInput placeholder="laboratory_test_PCT" type="number" onChangeText={handle5Change} required />
       <FormInput placeholder="laboratory_test_CK_MB" type="number" onChangeText={handle6Change}required/>
       <FormInput placeholder="laboratory_test_D_dimer" type="number" onChangeText={handle7Change} required />
       <FormInput placeholder="laboratory_test_ALT" type="number" onChangeText={handle8Change} required />
       <FormInput placeholder="laboratory_test_AST" type="number" onChangeText={handle9Change}required />
       <FormInput placeholder="laboratory_test_ALB" type="number" onChangeText={handle10Change}required />
       <FormInput placeholder="laboratory_test_LDH" type="number" onChangeText={handle11Change} required />
       <FormInput placeholder="Age" type="number" onChangeText={handle12Change} required/>
       <FormInput placeholder="cK" type="number" onChangeText={handle13Change}required />
       <FormInput placeholder="o2%" type="number" onChangeText={handle14Change} required/>
      
       <div class="row mx-4">
      <label class="form-label mx-3">symptoms_Cough ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="1203">
      <input  class="form-check-input" id="1203" onChange={handle15Change} type="radio" value="1" name="gender" />Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="1452">
      <input  class="form-check-input" id="1452" onChange={handle15Change} type="radio" value="0" name="gender" />Non
      </label>
      </div>
      </div>
      <div class="row mx-4">
      <label class="form-label mx-3">symptoms_Dyspnea ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="123">
      <input  class="form-check-input" id="123" onChange={handle16Change} type="radio" value="1" name="gender1" />Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="142">
      <input  class="form-check-input" id="142" onChange={handle16Change} type="radio" value="0" name="gender1" />Non
      </label>
      </div>
      </div>
      <div class="row mx-4">
      <label class="form-label mx-3">symptoms_Fatigue ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="203">
      <input  class="form-check-input" id="203" onChange={handle17Change} type="radio" value="1" name="gender2" />Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="452">
      <input  class="form-check-input" id="452" onChange={handle17Change} type="radio" value="0" name="gender2" />Non
      </label>
      </div>
      </div>
       <div class="container p-4"><button type="button" class="btn-primary btn-block btn " onClick={get_prediction}><h2>Predict</h2></button>
       </div>
       <div class="container p-4"><button type="button" class="btn-primary btn-block btn " onClick={get_prediction2}><h2>Predict2</h2></button>
       </div>
       </form>
       <p> "prediction est "{prediction}</p>
       <p> "prediction2 est "{prediction2}</p>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              </div>
      </div>
  
      </div>
      </section>
  );
}

export default AppM;
