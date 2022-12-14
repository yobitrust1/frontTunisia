import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton3 from "../../Form/FormButton3";
import FormButton5 from "../../Form/FormButton5";
import FormInput from "../../Form/FormInput";
import FormInput4 from "../../Form/FormInput4";
import FormInput2 from "../../Form/FormInput2";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormCheckBox from "../../Form/CheckBox";
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


const ExamenCliniques = (props) => {

    var handleExamOroChange = (newValue, text) => {
        if (newValue == true) setExamOro(examOro + " " + text)
        else setExamOro(examOro.replace(text + " ", ""))
        if (text === " Autre" && newValue == true) setAutreOro(true)
        if (text === " Autre" && newValue == false) setAutreOro(false)
    }

    var handleExamenOphtaChange = (newValue, text) => {
        if (newValue == true) setExamOphta(examOphta + " " + text)
        else setExamOphta(examOphta.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreOphta(true)
        if (text === "Autre" && newValue == false) setAutreOphta(false)
    }


    var handleExamPulChange = (newValue, text) => {
        if (newValue == true) setExamPulmo(examPulmo + " " + text)
        else setExamPulmo(examPulmo.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutrePul(true)
        if (text === "Autre" && newValue == false) setAutrePul(false)
    }

    var handleExamCutChange = (newValue, text) => {
        if (newValue == true) setExamCut(examCut + " " + text)
        else setExamCut(examCut.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreCut(true)
        if (text === "Autre" && newValue == false) setAutreCut(false)
    }

    var handleExamNeuroChange = (newValue, text) => {
        if (newValue == true) setExamNeuro(examNeuro + " " + text)
        else setExamNeuro(examNeuro.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreNeuro(true)
        if (text === "Autre" && newValue == false) setAutreNeuro(false)
    }
    var handleExamenCarChange = (newValue, text) => {
        if (newValue == true) setExamCardio(examCardio + " " + text)
        else setExamCardio(examCardio.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreCar(true)
        if (text === "Autre" && newValue == false) setAutreCar(false)
    }


    //component
    const [oro, setOro] = useState(false)
    const [pul, setPul] = useState(false)
    const [oph, setOph] = useState(false)
    const [cut, setCut] = useState(false)
    const [neu, setNeu] = useState(false)
    const [card, setCard] = useState(false)
    const [aut, setAut] = useState(false)
    //values
    const [temperature, setTemperature] = useState()
    const [fr, setFr] = useState()
    const [fc, setFc] = useState()
    const [sao2, setSao2] = useState()
    const [pa_sys, setPa_sys] = useState()
    const [pa_dya, setPa_dya] = useState()

    const [scoreGlas, setScoreGlas] = useState()
    const [scoreGlas1, setScoreGlas1] = useState()
    const [poids, setPoids] = useState()
    const [taille, setTaille] = useState()
    const [examOro, setExamOro] = useState("")
    const [examPulmo, setExamPulmo] = useState("Tirage intercostal")
    const [examOphta, setExamOphta] = useState("hyperh??mie conjonctivale unilat??rale")
    const [examCut, setExamCut] = useState("Erruption maculo-papuleuse g??neralis??e")
    const [examNeuro, setExamNeuro] = useState("D??sorientation temporo-spatiale")
    const [examCardio, setExamCardio] = useState("Assourdissement des bruits du coeur")
    const [autre, setAutre] = useState()
    //autre cb values values
    const [autreOro, setAutreOro] = useState(false)
    const [autrePul, setAutrePul] = useState(false)
    const [autreOphta, setAutreOphta] = useState(false)
    const [autreCut, setAutreCut] = useState(false)
    const [autreNeuro, setAutreNeuro] = useState(false)
    const [autreCar, setAutreCar] = useState(false)
    // autre inputVlaues
    const [autreInputOro, setAutreInputOro] = useState(false)
    const [autreInputPul, setAutreInputPul] = useState(false)
    const [autreInputOphta, setAutreInputOphta] = useState(false)
    const [autreInputCut, setAutreInputCut] = useState(false)
    const [autreInputNeuro, setAutreInputNeuro] = useState(false)
    const [autreInputCar, setAutreInputCar] = useState(false)


    // form validation
    const [validation, setValidation] = useState()

    var handleAutreChange = (text) => {
        setAutre(text)
    }
    //autrecb handle change functions
    var handleChangeAutreOro = (text) => {
        setAutreInputOro(text)
    }

    var handleChangeAutrePul = (text) => {
        setAutreInputPul(text)

    }
    var handleChangeAutreOpht = (text) => {
        setAutreInputOphta(text)
    }
    var handleChangeAutreCut = (text) => {
        setAutreInputCut(text)
    }
    var handleChangeAUtreNeu = (text) => {
        setAutreInputNeuro(text)
    }
    var handleChangeAutreCar = (text) => {
        setAutreInputCar(text)
    }
    //submit function
    var handleSubmit = () => {


       
        var x = examOro.replace("Autre", "Autre:" + autreInputOro)
        var values = {
            fr: fr,
            fc: fc,
            pa_sys: pa_sys,
            pa_dya: pa_dya,
            sao2: sao2,
            scoreGlas: scoreGlas,
            scoreGlas1: scoreGlas1,
            poids: poids,
            taille: taille,
            examOro: examOro.replace("Autre", "Autre:" + autreInputOro),
            examPulmo: examPulmo.replace("Autre", "Autre:" + autreInputPul),
            examOphta: examOphta.replace("Autre", "Autre:" + autreInputOphta),
            examCut: examCut.replace("Autre", "Autre:" + autreInputCut),
            examNeuro: examNeuro.replace("Autre", "Autre:" + autreInputNeuro),
            examCardio: examCardio.replace("Autre", "Autre:" + autreInputCar),
            autre: autre,
            temperature: temperature,
        }
        //console.log(values)
        props.addExamCli(props.patientList["cin"], values)
        props.navigation.navigate("ExamenRadioParaCli1")
    }



    return (
        <div class="big15">
      
        <div class="d-flex justify-content-between  mb-3">
        <div class="float-left d-flex p-2" >
<Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >
            <View style={tailwind("items-center")}>
            <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Examen clinique a l'admission</Text>
             
            <View style={tailwind("items-center")}>
                <Text style={tailwind('text-red-500 py-2')}>{validation}</Text>
                <FormInput4 placeholder="Temp??rature en ??C"   min={30}   max={44}  onChangeText={setTemperature} />
                <FormInput4 placeholder="FR  C/min"   min={0}   max={250}  onChangeText={setFr} />
                <FormInput4 placeholder="FC bpm"   min={0}   max={150}  onChangeText={setFc} />
                <FormInput4 placeholder="SaO2 %"   min={0}   max={100}  onChangeText={setSao2} />
                <FormInput2 placeholder1="PA systolique"  placeholder2="PA diastolique" onChangeText1={setPa_sys} onChangeText2={setPa_dya} />
                <FormInput2 placeholder1="Score de Glasgow" placeholder2="15" onChangeText1={setScoreGlas} onChangeText2={setScoreGlas1} />
                <FormInput4 placeholder="Poids kg"   min={0}   max={500}  maxLength={Number("3")} onChangeText={setPoids} />
                <FormInput4 placeholder="Taille m" min={0}   max={3} onChangeText={setTaille}  maxLength={Number("3")}/>
            </View>
            <View style={tailwind("px-8 py-2 ")}>
                <FormButton5 title="Examen oro-pharyng??" onPress={() => setOro(!oro)}/>
                {
                    oro === true &&
                    <View>
                        <FormCheckBox text='Gorge Rouge' value={false} onPress={handleExamOroChange} />
                        <FormCheckBox text="Hypertrophie des amygdales" value={false} onPress={handleExamOroChange} />
                        <FormCheckBox text="Anosmie" value={false}  onPress={handleExamOroChange} />
                        <FormCheckBox text=" Agueusie" value={false}  onPress={handleExamOroChange} />
                        <FormCheckBox text=" Autre" value={false}  onPress={handleExamOroChange} />


                    </View>


                }
                {autreOro === true && oro === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreOro} /></View>}
                <FormButton5 title="Examen pulmonaire" onPress={() => setPul(!pul)}/>
                {
                    pul === true &&
                    <View>
                        <FormCheckBox text="Tirage intercostal" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Tirage sus-sternal" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Silence auscultoire" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Hyper-sonorit??" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamPulChange} />
                    </View>

                }
                {autrePul === true && pul === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutrePul} /></View>}
                <FormButton5 title="Examen ophtalmologique" onPress={() => setOph(!oph)}/>
                {
                    oph === true &&
                    <View>
                        <FormCheckBox text="Hyperh??mie conjonctivale unilat??rale" value={false} onPress={handleExamenOphtaChange} />
                        <FormCheckBox text="Hyperh??mie conjonctivale bilat??rale" value={false} onPress={handleExamenOphtaChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamenOphtaChange} />
                    </View>
                }
                {autreOphta === true && oph === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreOpht} /></View>}
                <FormButton5 title="Examen cutan??" onPress={() => setCut(!cut)}/>
                {
                    cut === true && <View>
                        <FormCheckBox text="Erruption maculo-papuleuse g??neralis??e" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Erruption purpurique" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Engelure" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamCutChange} />
                    </View>
                }
                {autreCut === true && cut === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreCut} /></View>}
                <FormButton5 title="Examen neurologique" onPress={() => setNeu(!neu)}/>
                {
                    neu === true && <View>
                        <FormCheckBox text="D??sorientation temporo-spatiale" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Agitation" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Trouble de comportement" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamNeuroChange} />
                    </View>
                }
                {autreNeuro === true && neu === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAUtreNeu} /></View>}
                <FormButton5 title="Examen cardiovasculaire" onPress={() => setCard(!card)}/>
                {
                    card === true &&
                    <View>
                        <FormCheckBox text="Assourdissement des bruits du coeur" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Rythme cardiaque irr??gulier" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Souffre cardiaque si oui" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Froideur des extr??mit??s" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Marbures aux genoux /generalis??es" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamenCarChange} />
                    </View>

                }
                {autreCar === true && card === true && <View style={tailwind("items-center")}><FormInput placeholder="Autre" onChangeText={handleChangeAutreCar} /></View>}
                <FormButton5 title="Autres ??l??ments de l'examen physique" onPress={() => setAut(!aut)}/>
                {aut && <View style={tailwind("items-center")}><FormInput placeholder="Pr??cisier" onChangeText={handleAutreChange} /></View>}

            </View>
            <View style={tailwind("items-center")}>
                <View style={styles.row}>
                <FormButton3 title="Retour" onPress={() => { props.navigation.navigate("CaracCliniques1") }} />
                <FormButton3 title="Enregistrer" onPress={handleSubmit} />
                </View>
                <FormButton3 title="Suivant" onPress={() => { props.navigation.navigate("ExamenRadioParaCli1") }} />

            </View>
        </View>
        </Container>
        </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={7} /> </div>


      
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
    addExamCli: actions.addExamCli
};
export default connect(mapStateToProps, mapActionToProps)(ExamenCliniques);
