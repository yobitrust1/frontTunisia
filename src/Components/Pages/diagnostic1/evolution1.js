import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton2 from "../../Form/FormButton2";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import FormInput4 from '../../Form/FormInput4';
import FormInput2 from '../../Form/FormInput2';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
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

const Evolution = (props) => {

  //dateTime picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //date.setTime(date.getTime()-date.getTimezoneOffset()*60*1000)
    setTime(date)
    hideDatePicker();
  };
  
  const [category, setCategory] = useState()
  const [type, setType] = useState()
  const [time, setTime] = useState()
  const [value, setValue] = useState()
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [validation, setValidation] = useState()

  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [saps2, setSaps2] = useState()
  const [apache2, setApache2] = useState()
  const [sofa, setSofa] = useState()
  const [dateS, setDateS] = useState()
  const [typeS, setTypeS] = useState()
  const [dateH, setDateH] = useState()
  const [hopital, setHopital] = useState()
  const [service, setService] = useState()
  const [ville, setVille] = useState()
  const [lieu, setLieu] = useState()

  const [hospi, setHospi] = useState()


  var handleHospiChange = (data) => {
    if (data.target.value==="0") setHospi(true)
    if (data.target.value==="1") setHospi(false)
  }

  var handleTypeSChange = (data) => {
 setTypeS(data.target.value)

    }



  var handleValueCb = (data) => {
    if (data.target.value==="oui")
      setValue(1.0)
    if (data.target.value==="non")
      setValue(0.0)
  }

  var handleEvolutionType = (data) => {
    if (data.target.value==="0") {
      setType("IHH")
      setTypeS("")

    }
    if (data.target.value==="1") {
      setType("Ho")
      setTypeS("Transfert inter-hopital")
    }

  }






  
var handleTypeSChange1 = (data) => {
  setValue(data.target.value)
 
     }
     var handleTypeSChange2 = (data) => {
      setValue1(data.target.value)
     
         }
         var handleTypeSChange3 = (data) => {
          setValue2(data.target.value)
         
             }

var handleTypeChange = (data) => {
setType(data.target.value)
  }
  var handleSubmit = () => {
    

    if (category === "AssResp") {
      if (dateD === undefined) { setValidation("La date de début est obligatoire!"); return; }

    }
    if(category ==="Evolution"){
      if(dateS === undefined) {setValidation("La date de sortie est obligatoire");return}
    }



    var values = {
      time: time,
      type: type,
      category: category,
      value: value,
      value1: value1,
      value2: value2,
      dateD: dateD,
      dateF: dateF,
      apache2: apache2,
      saps2: saps2,
      sofa: sofa,
      dateS: dateS,
      typeS: typeS,
      dateH: dateH,
      hopital: hopital,
      service: service,
      ville: ville,
      lieu: lieu

    }
    console.log(values)
    setCategory()
    setTime()
    setValue()
    setDateF()
    setDateD()
    setSofa()
    setApache2()
    setSaps2()
    props.addEvolution(props.patientList["cin"], values)

  }

  return (
    <div class="big17">
      
    <div class="d-flex justify-content-between  mb-3">
    <div class="float-left d-flex p-2" >
<Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >
    <View style={tailwind("px-8 py-8 ")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Evolution</Text>
     
      <View style={tailwind("items-center py-8")}>
        <FormButton2 title="Evolution quotidienne" onPress={() => { setCategory("evaluValues"); setType("Température"); setValidation() }}/>
        {
          category === "evaluValues" && <div>
          <div  >
          <div class="row mx-4">
          <div class="form-check mx-1">
      <label class="form-check-label" for="Température">
      <input  class="form-check-input" id="Température" onChange={handleTypeChange} type="radio" value="Température" name="gender" />Température
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="SaO2">
      <input  class="form-check-input" id="SaO2" onChange={handleTypeChange} type="radio" value="SaO2" name="gender" />SaO2
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Besoin en O2">
      <input  class="form-check-input" id="Besoin en O2" onChange={handleTypeChange} type="radio" value="Besoin en O2" name="gender" />Besoin en O2
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="TA">
      <input  class="form-check-input" id="TA" onChange={handleTypeChange} type="radio" value="TA" name="gender" />TA
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="FR">
      <input  class="form-check-input" id="FR" onChange={handleTypeChange} type="radio" value="FR" name="gender" />FR
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Signes de lutte">
      <input  class="form-check-input" id="Signes de lutte" onChange={handleTypeChange} type="radio" value="Signes de lutte" name="gender" />Signes de lutte
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="FC">
      <input  class="form-check-input" id="FC" onChange={handleTypeChange} type="radio" value="FC" name="gender" />FC
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Froideur">
      <input  class="form-check-input" id="Froideur" onChange={handleTypeChange} type="radio" value="Froideur" name="gender" />Froideur
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Marbrures">
      <input  class="form-check-input" id="Marbrures" onChange={handleTypeChange} type="radio" value="Marbrures" name="gender" />Marbrures
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Angoisse/Agitation">
      <input  class="form-check-input" id="Angoisse/Agitation" onChange={handleTypeChange} type="radio" value="Angoisse/Agitation" name="gender" />Angoisse/Agitation
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Score de glasgow">
      <input  class="form-check-input" id="Score de glasgow" onChange={handleTypeChange} type="radio" value="Score de glasgow" name="gender" />Score de glasgow
      </label>
      </div>
      </div>
          </div>
          <label class="form-label mx-4">{validation}</label>
            {(type === "Température" || type === "SaO2" || type === "Besoin en O2" || type === "TA" || type === "FR" || type === "FC" || type === "Score de glasgow") &&
              <View >
              <Text >Date d’amélioration</Text>
            <input type="date" class="border border-primary col-6" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSChange1}/>
            <Text >Date d’aggravation</Text>
            <input type="date" class="border border-primary col-6" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSChange2}/>
            <Text >Date de réapparition</Text>
            <input type="date" class="border border-primary col-6" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSChange3}/></View>
            }
            <FormButton title="Enregistrer" onPress={handleSubmit} />
          </div>

        }
        <FormButton2 title="Transfert en USI" onPress={() => { setCategory("USI"); setValidation(); setType("IRA grave (3)"); }}/>
        {
          category === "USI" && <View >
            <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>Choisir la méthode de transfert ?</Text>
            <div  >
            <div>  <input onChange={handleTypeChange} type="radio" value="IRA grave (3)" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>IRA grave (3)</Text></div>
            <div>  <input onChange={handleTypeChange} type="radio" value="Sepsis/Choc septique" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Sepsis/Choc septique</Text></div>
            </div>
            <View style={tailwind("items-center")}>
            <DatePicker
            color="primary"
            placeholder="YYYY-MM-DD"
            value={dateD}
            clearable
            minDate="1920-05-01"
            maxDate={new Date()}
            onDate={(dateD) => {
            setDateD(dateD)
            }}
            onClear={() => setDateD('')}
            width={250}
            onChange={(value) => setDateD(value)}/>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateF}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateF) => {
              setDateF(dateF)
              }}
              onClear={() => setDateF('')}
              width={250}
              onChange={(value) => setDateF(value)}/>
              <FormInput4 placeholder={"SAPS 2"} onChangeText={setSaps2} min={0}   max={96}  maxLength={Number("8")} />
              <FormInput4 placeholder={"APACHE 2"} onChangeText={setApache2} min={0}   max={8871}  maxLength={Number("8")} />
              <FormInput4 placeholder={"SOFA"} onChangeText={setSofa}   min={0}   max={30}  maxLength={Number("8")} />
              <FormButton2 title="Enregistrer" onPress={handleSubmit} />
            </View>


          </View>

        }
        <FormButton2 title="Assistance respiratoire" onPress={() => { setCategory("AssResp"); setValidation() }}/>
        {
          category === "AssResp" && <View >
            <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>{validation}</Text>
            <Text style={tailwind("text-center text-gray-700 p-2 text-center")}>Choisir la méthode de transfert ?</Text>


            <View style={styles.row}>
        <div>
          <div><input  onChange={handleTypeChange} type="radio" value="HFNC / CPAP min 12h" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>HFNC / CPAP min 12h</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="VNI min 12h" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>VNI min 12h</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="VMI" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>VMI</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="DV" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>DV</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="Protective ventilation" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Protective ventilation</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="Ventilation free days" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Ventilation free days</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="Device free days" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Device free days</Text></div>
        </div>
      </View>


            <View style={tailwind("items-center")}>
            <DatePicker
            color="primary"
            placeholder="YYYY-MM-DD"
            value={dateD}
            clearable
            minDate="1920-05-01"
            maxDate={new Date()}
            onDate={(dateD) => {
            setDateD(dateD)
            }}
            onClear={() => setDateD('')}
            width={250}
            onChange={(value) => setDateD(value)}/>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateF}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateF) => {
              setDateF(dateF)
              }}
              onClear={() => setDateF('')}
              width={250}
              onChange={(value) => setDateF(value)}/>
              <FormButton2 title="Enregistrer" onPress={handleSubmit} />
            </View>
          </View>
        }
        <FormButton2 title="Evolution de l'isolement/hospitalisation" onPress={() => { setCategory("Evolution"); setValidation(); setType("IHH"); setHospi(true) }}/>

        {
          category === "Evolution" && <View >
                 <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>{validation}</Text>
                 <View style={styles.row}>
                 <div>
                 <div><input  onChange={handleEvolutionType} type="radio" value="0" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'isolement hors hopital</Text></div>
                 <div><input  onChange={handleEvolutionType} type="radio" value="1" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'hospitalisation</Text></div>
                 </div>
                 </View>

            {
              type === "IHH" && <View style={tailwind("")}>
                <View style={tailwind("items-center")}>
                <DatePicker
                color="primary"
                placeholder="YYYY-MM-DD"
                value={dateS}
                clearable
                minDate="1920-05-01"
                maxDate={new Date()}
                onDate={(dateS) => {
                setDateS(dateS)
                }}
                onClear={() => setDateS('')}
                width={250}
                onChange={(value) => setDateS(value)}/>
                </View>
                <View style={styles.row}>
                  <Text style={tailwind("text-gray-700 py-2 ")}>Hospitalisé ?</Text>
                  <View style={styles.row}>
                  <div>
                  <div><input  onChange={handleHospiChange} type="radio" value="0" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text></div>
                  <div><input  onChange={handleHospiChange} type="radio" value="1" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text></div>
                  </div>
                  </View>
                </View>
                {
                  hospi === true && <View style={tailwind("items-center")}>
                  <DatePicker
                  color="primary"
                  placeholder="YYYY-MM-DD"
                  value={dateH}
                  clearable
                  minDate="1920-05-01"
                  maxDate={new Date()}
                  onDate={(dateH) => {
                  setDateH(dateH)
                  }}
                  onClear={() => setDateH('')}
                  width={250}
                  onChange={(value) => setDateH(value)}/>

                    <FormInput placeholder="Hopital" onChangeText={setHopital} />
                    <FormInput placeholder="Service" onChangeText={setService} />
                    <FormInput placeholder="Ville" onChangeText={setVille} />
                  </View>
                }
                {
                  hospi === false && <View >
                  <div>
                  <div>  <input  onChange={handleTypeSChange} type="radio" value="Evolution de l'isolement hors hopital" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'isolement hors hopital</Text></div>
                  <div>  <input  onChange={handleTypeSChange} type="radio" value="Evolution de l'hospitalisation" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'hospitalisation</Text></div>
                  <div>  <input  onChange={handleTypeSChange} type="radio" value="Deccés" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Deccés</Text></div>
                  </div>
                  </View>
                }
                <View style={tailwind("items-center")}>
                  <FormButton title="Enregistrer" onPress={handleSubmit} />
                </View>

              </View>
            }

            {
              type === "Ho" && <View style={tailwind("items-center")}>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateS}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateS) => {
              setDateS(dateS)
              }}
              onClear={() => setDateS('')}
              width={250}
              onChange={(value) => setDateS(value)}/>
                <div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Transfert inter-hopital" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert inter-hopital</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Transfert inter-service" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert inter-service</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Retour à domicile en quarantine" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Retour à domicile en quarantine</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Transfert à domicile sans quarantine" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert à domicile sans quarantine</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Deccés" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Deccés</Text></div>
                </div>
                {
                  (typeS === "Transfert inter-hopital" || typeS === "Transfert inter-service") && <FormInput placeholder="Lieu" onChangeText={setLieu} />
                }

                <View style={tailwind("items-center")}>
                  <FormButton2 title="Enregistrer" onPress={handleSubmit} />
                </View>
              </View>
            }

          </View>

        }

      </View>


      <View style={tailwind("items-center py-8")}>
        <FormButton2 title="Retour" onPress={() => { props.navigation.navigate("Traitement1") }} />
        <FormButton2 title="Suivant" onPress={() => { props.navigation.navigate("EvaluationFinale1") }} />
      </View>
      </View>
      </Container>
      </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={11} /> </div>


      
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
  evolutionList: state.medicalService.evolutionList
});
const mapActionToProps = {

  addEvolution: actions.addEvolution,
  getEvolution: actions.getEvolution,
};
export default connect(mapStateToProps, mapActionToProps)(Evolution);
