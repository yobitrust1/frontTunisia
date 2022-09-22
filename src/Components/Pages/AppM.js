import React, { useState, useEffect } from 'react';
import './home.css';
import FormInput from "../Form/FormInputt";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
function App(props) {
  const [Mg2_1, setMg2_1] = useState(1);
  const [LDH1, setLDH1] = useState(1);
  const [GB1, setGB1] = useState(1);
  const [BiliT1, setBiliT1] = useState(1);
  const [creat1, setcreat1] = useState(1);
  const [ASAT1, setASAT1] = useState(1);
  const [fibrinogene1, setfibrinogene1] = useState(1);
  const [pH1, setpH1] = useState(1);
  const [temperature, settemperature] = useState(1);
  const [CRP1, setCRP1] = useState(1);
  const [prediction, setprediction] = useState();
  var handle1Change = (text) => {
    setMg2_1(text)
}
var handle2Change = (text) => {
  setLDH1(text)
}
var handle3Change = (text) => {
  setGB1(text)
}
var handle4Change = (text) => {
  setBiliT1(text)
}
var handle5Change = (text) => {
  setcreat1(text)
}
var handle6Change = (text) => {
  setASAT1(text)
}

var handle7Change = (text) => {
  setfibrinogene1(text)
}
var handle8Change = (text) => {
  setpH1(text)
}
var handle9Change = (text) => {
  settemperature(text)
}
var handle10Change = (text) => {
  setCRP1(text)
}

function get_prediction() {
  alert(prediction)};  
useEffect(() => {
  fetch('http://localhost:5000/predict',{method:"POST",
  body :JSON . stringify({'Mg2_1':Mg2_1,'LDH1':LDH1,'GB1':GB1,'BiliT1':BiliT1,'créat1':creat1,'ASAT1':ASAT1,'fibrinogène1':fibrinogene1,'pH1':pH1,'température':temperature,'CRP1':CRP1})})
    .then(res => res.json())
      .then(data => {
        setprediction(data.pred);
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
                  <h2 class="font-weight-bold text-center p-5 text-primary">les 10 variables du modèle Mortalité</h2>
                  
       <FormInput placeholder="Mg2_1" type="number" onChangeText={handle1Change} required/>
       <FormInput placeholder="LDH1" type="number" onChangeText={handle2Change} required/>
       <FormInput placeholder="GB1" type="number" onChangeText={handle3Change} required />
       <FormInput placeholder="BiliT1" type="number" onChangeText={handle4Change} required />
       <FormInput placeholder="creat1" type="number" onChangeText={handle5Change} required />
       <FormInput placeholder="ASAT1" type="number" onChangeText={handle6Change}required/>
       <FormInput placeholder="fibrinogene1" type="number" onChangeText={handle7Change} required />
       <FormInput placeholder="pH1" type="number" onChangeText={handle8Change} required />
       <FormInput placeholder="temperature" type="number" onChangeText={handle9Change}required />
       <FormInput placeholder="CRP1" type="number" onChangeText={handle10Change}required />
       <div class="container p-4"><button type="button" class="btn-primary btn-block btn " onClick={get_prediction}><h2>Predict</h2></button>
       </div>
       
       </form>
       <p> "prediction est "{prediction}</p>
       <MDBBtn type="button" gradient="blue" rounded className="btn px-md-5 z-depth-1a"onClick={() => props.navigation.navigate("SearchPatient")}><h3>Retour</h3></MDBBtn>

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

export default App;
