import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from '../../Form/FormInput';
import FormInput2 from '../../Form/FormInput2';
import FormInput4 from '../../Form/FormInput4';
import FormButton from '../../Form/FormButton';
import FormButton2 from '../../Form/FormButton2';
import FormButton3 from '../../Form/FormButton3';
import CaracCls from "../../Form/CaracCls";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
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



const CaracCliniques = (props) => {

    const [sym, setSym] = useState(true)
    const [dateD, setDateD] = useState()
    const [dateF, setDateF] = useState()
    const [temperature, setTemperature] = useState()
    const [typeT, settypeT] = useState("Séche")
    const [selle, setSelle] = useState()
    const [autre, setAutre] = useState()
    const [nbEpisodes, setNbEpisodes] = useState()

    //carac
    const [fievre, setFievre] = useState(false)
    const [toux, setToux] = useState(false)
    const [cepah, setCeph] = useState(false)
    const [asth, setAsth] = useState(false)
    const [mya, setMya] = useState(false)
    const [ody, setOdy] = useState(false)
    const [rhi, setRhi] = useState(false)
    const [ano, setAno] = useState(false)
    const [agu, setAgu] = useState(false)
    const [dia, setDia] = useState(false)
    const [nau, setNau] = useState(false)
    const [eru, setEru] = useState(false)
    const [eng, setEng] = useState(false)
    const [dou, setDou] = useState(false)
    const [gen, setGen] = useState(false)
    const [ess, setEss] = useState(false)
    const [aut, setAut] = useState(false)


    const [test, setTest] = useState(false)

    var handleTemperatureChange = (text) => {
       setTest(true)
        setTemperature(text)
    }
    var handletypeT = (data) => {
            settypeT(data.target.value)
    }
    var handledateD = (data) => {
        setDateD(data.target.value)
           }
           var handledateF = (data) => {
            setDateF(data.target.value)
               }
           
    var handleSelle = (text) => {
        setSelle(text)
    }
    var handleAutre = (text) => {
        setAutre(text)
    }
    var handleNbEpisodes = (text) => {
        setNbEpisodes(text)
    }
    var handleSymChange = (data) => {
    if (data.target.value==="Oui")
        setSym(true)
    else setSym(false)
}
    var handleSubmitCarac = (item) => {
       
        var values = {
            type: item,
            typeT: typeT,
            temperature: temperature,
            selle: selle,
            nbEpisodes: nbEpisodes,
            autre: autre,
            dateD: dateD,
            dateF: dateF,
            sym: sym

        }
        console.log(values)
        props.addCaracCliniques(props.patientList["cin"], values)
        console.log(values)
    }




    return (
        <div class="big12">
      <div>
        <div class="d-flex justify-content-between  mb-3">
        <div class="float-left d-flex p-2" >
        <Container  style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >
        <View class="p-2">
            <View>
            <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Caractéristiques cliniques du cas</Text>
            <View style={tailwind("items-center")}>
            <div  >
            <Text style={tailwind('text-gray-700 py-2')}>Symptomatique ?</Text>
              <input onChange={handleSymChange} type="radio" value="Oui" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
              <input onChange={handleSymChange} type="radio" value="Non" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            </div>
            </View>
            {
                sym === true &&
                <View style={tailwind("items-center")}>

                    <FormButton2 title="Fièvre" onPress={() => setFievre(!fievre)}>
                        <Text >Fièvre</Text>
                    </FormButton2>
                    {
                        fievre === true && <View style={tailwind("items-center")}>
                            <FormInput4 placeholder="Si mesuré" min={30}   max={44} onChangeText={handleTemperatureChange} />
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Fievre"); setFievre(!fievre) }} />
                        </View>
                    }
                    <FormButton2  title="Toux" onPress={() => setToux(!toux)} />
                    {
                        toux === true && <View style={tailwind("items-center")}>
                        <View style={styles.row}>
                                <div  >
                        	  <Text style={tailwind('text-gray-700 py-2')}>Equilibré?</Text>
                                  <input onChange={handletypeT} type="radio" value="Séche" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Séche</Text>
                                  <input onChange={handletypeT} type="radio" value="Productive" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Productive</Text>
                                </div>
                              </View>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Toux"); setToux(!toux) }} />
                        </View>
                    }
                    <FormButton2  title="Cépahlées" onPress={() => setCeph(!cepah)}/>
                    {
                        cepah === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Cephalees"); setCeph(!cepah) }} />
                        </View>
                    }
                    <FormButton2  title="Asthénie/fatigue" onPress={() => setAsth(!asth)}/>
                    {
                        asth === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("AshthFat"); setAsth(!asth) }} />
                        </View>
                    }
                    <FormButton2 title="Myalgies/courabatures" onPress={() => setMya(!mya)}/>
                    {
                        mya === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("MyalCourba"); setMya(!mya) }} />
                        </View>
                    }
                    <FormButton2  title="Odynophagie" onPress={() => setOdy(!ody)}/>
                    {
                        ody === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Odynophagie"); setOdy(!ody) }} />
                        </View>
                    }
                    <FormButton2 title="Rhinorrhée/Congestion nasale" onPress={() => setRhi(!rhi)}/>
                    {
                        rhi === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("RhinoCongNas"); setRhi(!rhi) }} />
                        </View>
                    }
                    <FormButton2 title="Anosmie" onPress={() => setAno(!ano)}/>
                    {
                        ano === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Anosmie"); setAno(!ano) }} />
                        </View>
                    }
                    <FormButton2 title="Agueusie" onPress={() => setAgu(!agu)}/>
                    {
                        agu === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Agueusie"); setAgu(!agu) }} />
                        </View>
                    }
                    <FormButton2 title="Diarrhée" onPress={() => setDia(!dia)}/>
                    {
                        dia === true && <View style={tailwind("items-center")}>
                            <FormInput4 placeholder="Nb selles/jour" onChangeText={handleSelle} maxLength={Number("2")} min={0}   max={100} />
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Diarrhee"); setDia(!dia) }} />
                        </View>
                    }
                    <FormButton2 title="Nausée/voumissement" onPress={() => setNau(!nau)}/>
                    {
                        nau === true && <View style={tailwind("items-center")}>
                            <FormInput4 placeholder="Nb episodes/jour" onChangeText={handleNbEpisodes}  maxLength={Number("2")} min={0}   max={100}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("NauVoumi"); setNau(!nau) }} />
                        </View>
                    }

                    <FormButton2 title="ERuption cutanée" onPress={() => setEru(!eru)}/>
                    {
                        eru === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("ErruptionCu"); setEru(!eru) }} />
                        </View>
                    }
                    <FormButton2 title="Engelure" onPress={() => setEng(!eng)}/>
                    {
                        eng === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Engelure"); setEng(!eng) }} />
                        </View>
                    }
                    <FormButton2 title="Douleur thoracique" onPress={() => setDou(!dou)}/>
                    {
                        dou === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("DouleurThora"); setDou(!dou) }} />
                        </View>
                    }
                    <FormButton2 title="Génie respiratoire" onPress={() => setGen(!gen)}/>
                    {
                        gen === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("GeneRespi"); setGen(!gen) }} />
                        </View>
                    }
                    <FormButton2 title="Essoufflement" onPress={() => setEss(!ess)}/>
                    {
                        ess === true && <View style={tailwind("items-center")}>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Essouflement"); setEss(!ess) }} />
                        </View>
                    }
                    <FormButton2 title="Autres signes cliniques" onPress={() => setAut(!aut)}/>
                    {
                        aut === true && <View style={tailwind("items-center")}>
                            <FormInput placeholder="Préciser" onChangeText={handleAutre} />
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onSubmit={() => { handleSubmitCarac("Autre"); setAut(!aut) }} />
                        </View>
                    }

                </View>

            }
            <View style={tailwind("items-center pb-8")}>
                <View style={styles.row}>
                    <FormButton3 title="Retour" onPress={() => { props.navigation.navigate("Admission1") }} />
                    {sym === false && <FormButton3 title="Enregistrer" onPress={() => { handleSubmitCarac(""); props.navigation.navigate("ExamenCliniques1") }} />}
                </View>
                <FormButton3 title="Suivant" onPress={() => { props.navigation.navigate("ExamenCliniques1") }} />

            </View>
            </View>
      </View>
      </Container>
      </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={6} /> </div>


      </div>
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
    loggedUser: state.medicalService.loggedUser,
    patientList: state.medicalService.patientList,
});
const mapActionToProps = {
    login: actions.login,
    logout: actions.logout,
    addCaracCliniques: actions.addCaracCliniques
};
export default connect(mapStateToProps, mapActionToProps)(CaracCliniques);
