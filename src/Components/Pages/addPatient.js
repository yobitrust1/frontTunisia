import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormInput from "../Form/FormInput";
import FormInput3 from "../Form/FormInput3";
import tailwind from 'tailwind-rn';
import Steps from "../Form/Steps";
import FormButton from '../Form/FormButton';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
const AddPatient = (props) => {
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


  useEffect(() => {


  }, [localStorage.getItem("addPatientMessage")])

  const [cin, setCin] = useState(0)
  const [matricule, setMatricule] = useState(0)
  const [identifiant, setIdentifiant] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [date, setDate] = useState("")
  const [sexe, setSexe] = useState("Male")
  const [adresse, setAdresse] = useState("")
  const [nationnalite, setNationnalite] = useState("")
  const [telDomicile, setTelDomicile] = useState("")
  const [telProtable, setTelPortable] = useState("")
  const [profession, setProfession] = useState("")
  const [marie, setMarie] = useState("")
  const [vitSeul, setVitSeul] = useState(false)
  const [nbIndiv, setNbIndiv] = useState(0)
  const [nbEnf, setNbEnf] = useState(0)
  const [nbCham, setNbCham] = useState(0)
  const [nivEtude, setNivEtude] = useState("")

  var handleNivEtude = (data) => {
    console.log(data.target.value)
      setNivEtude(data.target.value)
  }

  var handleNbCham = (text) => {
    setNbCham(text)
  }

  var handleNbEnf = (text) => {
    setNbEnf(text)
  }
  var handleNbIndivChange = (text) => {
    setNbIndiv(text)
  }

  var handleProfessionChange = (text) => {
    setProfession(text)
  }
  var handleTelPortable = (text) => {
    setTelPortable(text)
  }
  var handleTelDomicile = (text) => {
    setTelDomicile(text)
  }
  var handleNationnaliteChange = (text) => {
    setNationnalite(text)
  }
  var handleCinChange = (text) => {
    setCin(text)
  }

  var handleMatriculeChange = (text) => {
    setMatricule(text)
  }
  var handleNomChange = (text) => {
    setNom(text)
  }
  var handleIdentifiantChange = (text) => {
    setIdentifiant(text)
  }
  var handlePrenomChange = (text) => {

    setPrenom(text)
  }
  var handleAddresseChange = (text) => {
    setAdresse(text)
  }

  var handleSexeChange = (data) => {
    console.log(data.target.value)
      setSexe(data.target.value)
  }
  var handleMarieChange = (data) => {
      setMarie(data.target.value)
  }

  var handleVitSeul = (data) => {
    setVitSeul(data.target.value)
  }

  var test=JSON.parse(localStorage.getItem("loggedUser"));

  var handleSubmit = (e) => {
    var values = {
      cin: cin,
      cinD: test.username,
      matricule: matricule,
      identifiant:identifiant,
      nom: nom,
      prenom: prenom,
      sexe: sexe,
      birthDate: date,
      nationnalite: nationnalite,
      adresse: adresse,
      telPort: telProtable,
      telDomicile: telDomicile,
      profession: profession,
      niveauEtude: nivEtude,
      vitSeul: vitSeul,
      individu: nbIndiv,
      enfant: nbEnf,
      chambres: nbCham,
      mariee: marie

    }
    e.preventDefault()
       props.cc(values)
         props.navigation.navigate("SearchPatient1")
     }
  var handleExit = (e) => {
    localStorage.setItem("addPatientMessage", JSON.stringify(null))
    props.navigation.navigate("SearchPatient1")
  }
  /*<FormInput3 
        mask="999999"
        placeholder="Cin"
        onChange={handleCinChange}
        />*/
  return (
    <div class="big010m">
      
    <div class="d-flex justify-content-between  mb-3">
    <div class="float-left d-flex p-2" >
<Container style={{backgroundsize: "cover"}} component="main" maxWidth="xs" >

   
    <View  >
      <Text style={tailwind('text-gray-700 font-bold text-xl text-left')}>Dossier Patient</Text>
      <Text style={tailwind('text-gray-700 font-bold text-xl text-left')}>Informations générales</Text>
      <Text style={tailwind('text-red-500 font-bold text-left py-2')} > {(localStorage.getItem("addPatientMessage") !== JSON.stringify(null)) && (props.message)}</Text>
      <View style={tailwind(' items-center ')}>
      
      
        
        <FormInput3
          mask="999999999"
          placeholder="Cin"
          type="number-pad"
          onChangeText={handleCinChange}
        />
        <FormInput3
          mask="9999999999"
          placeholder="Matricule"
          onChangeText={handleMatriculeChange}
        />
        <FormInput
        
          placeholder="Identifiant"
          onChangeText={handleIdentifiantChange}
        />

        <FormInput3
        mask="aaaaaaaaaaa"
          placeholder="Nom"
          onChangeText={handleNomChange}
        />
        <FormInput3
        mask="aaaaaaaaaaa"
          placeholder="Prenom"
          onChangeText={handlePrenomChange}
        />
        <View style={styles.row}>
          <div >

            <Text style={tailwind('text-gray-700 py-2')}>Sexe ?</Text>
            <input  onChange={handleSexeChange} type="radio" value="Male" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Male</Text>
            <input  onChange={handleSexeChange} type="radio" value="Female" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Female</Text>
          </div>
        </View>
        <Text style={tailwind('text-gray-700 py-2')}> Date De Naissance ?</Text>
        <div style={tailwind(' items-center ')}>
        <DatePicker date={date} onDateChange={setDate} locale={enGB}>
      {({ inputProps, focused }) => (
        <input
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>
        </div>
        <FormInput3
          placeholder="Adresse"
          onChangeText={handleAddresseChange}
        />
        <FormInput3
          placeholder="Nationalité"
          onChangeText={handleNationnaliteChange}
        />
        <FormInput3
          mask="(+216)-99-999-999"
          placeholder="Telephone Domicile"
          onChangeText={handleTelDomicile}
        />
        <FormInput3
          mask="(+216)-99-999-999"
          placeholder="Telephone portable"
          onChangeText={handleTelPortable}
        />
        <FormInput3
          mask="aaaaaaaaaaaaaaaaa"
          placeholder="Profession"
          onChangeText={handleProfessionChange}
        />


        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2 pb-2')}>
            Niveau d'étude{nivEtude}
        </Text>
      </View>
      <View style={styles.row}>

        <div  >

        <div  >  <input  onChange={handleNivEtude} type="radio" value="Non Scolarisé" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non Scolarisé</Text>
                 <input  onChange={handleNivEtude} type="radio" value="Primaire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Primaire</Text>

                <input  onChange={handleNivEtude} type="radio" value="Collège" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Collège</Text>
        </div>
          <div  ><input  onChange={handleNivEtude} type="radio" value="Secondaire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Secondaire</Text>
                <input  onChange={handleNivEtude} type="radio" value="Universiatire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Universiatire</Text>
          </div>
        </div>

      </View>
        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Marié ?
    </Text>
      </View>
        <View style={styles.row}>

          <div  onChange={handleMarieChange}>
            <input type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            <input type="radio" value="Autre" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text>
          </div>

        </View>
        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Vit seul ?
    </Text>
      </View>
        <View style={styles.row}>
          <div  onChange={handleMarieChange}>
            <input type="radio" value={true} name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input type="radio" value={false} name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
          </div>
        </View>
        <FormInput3
          mask="99"
          placeholder="Nbre d'individus par famille"
          onChangeText={handleNbIndivChange}
        />

        <FormInput3
          mask="99"
          placeholder="Nbre d'enfants à cahrge"
          onChangeText={handleNbEnf}
        />

        <FormInput3
          mask="99"
          placeholder="Nbre de chambres dans la maison"
          onChangeText={handleNbCham}
        />
        <View style={styles.row}>
          <FormButton title="Annuler" onPress={handleExit} />
          <FormButton title="Ajouter" onPress={handleSubmit} />
        </View>
      </View>
    </View>

</Container>
        </div>
      <div class="p-2"> </div>
      <div class="float-right d-flex flex-reverse p-2"> <Steps  current={1} /> </div>

      <ParticlesBg color="#9acfce" num={200} type="cobweb" bg={true} />
      
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
const mystyle = {
  color: "white",

  backgroundsize: "cover"
};
const mapStateToProps = (state) => ({
  message: state.medicalService.message
});
const mapActionToProps = {
  cc: actions.addPatient
};

export default connect(mapStateToProps, mapActionToProps)(AddPatient);