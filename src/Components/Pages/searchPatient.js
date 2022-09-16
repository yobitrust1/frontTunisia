import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from "../Form/FormInput";
import FormButton from "../Form/FormButton";
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import "bootstrap/dist/css/bootstrap.min.css";
import apn from "../img/20.png";
import './home.css';
//import 'localstorage-polyfill';



const SearchPatient = (props) => {
  var test=JSON.parse(localStorage.getItem("loggedUser"));
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
    props.search(search,test.username)
  }, [])

  const tableHead = ['Cin', 'Nom', 'Prenom']
  const [search, setSearch] = useState(0)
  const [search2, setSearch2] = useState(0)

  const handleSearchChange = (text) => {
    setSearch(text.target.value)
    console.log(search)
  }
  const handleSearch = () => {
    setSearch2(search)
    console.log(search)
    props.search(search,test.username)


  }
  return (

<div class="big">

<div class="container login__container my-5">
        <div class="row login__row">
            <div class="col-md-6 d-flex">
                <img class="login__imagek align-self-center" src={apn}
                    width="70%" alt="" />
            </div>
            <div class="col-md-5 d-flex">
                <div class="align-self-center card login__card shadow-sm w-100">
                    <div class="card-body">
                        <form action="">
                            <h2 class="text-muted text-center"><font color="447EFF">Rechercher un patient</font></h2>
                            <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Rechercher....cin " aria-label="Search"
    aria-describedby="search-addon mt-15" onChange={handleSearchChange} />
  <button type="button" class="btn btn-outline-info" onClick={handleSearch}>search</button>
</div>
{(search2 != 0) && ((typeof (props.patientList) === 'string' && props.patientList) ||
                (
                  <div >

                    <FormButton title="Details" onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title="Dashbord" onPress={() => { props.navigation.navigate("Json1") }} />
                    <FormButton title="Dashbord1" onPress={() => { props.navigation.navigate("Info") }} />
                    <FormButton title="Save File" onPress={() => { props.navigation.navigate("Dash1") }} />
                  </div>

                ))}
<div class="d-flex justify-content-center mt-20 log_container">
        <button type="button"  class="btn log_btn" onClick={() => { props.navigation.navigate("AddPatient") }} >Ajouter un patient</button>
        </div>
        <div class="d-flex justify-content-center mt-20 gol_container">
        <button type="button"  class="btn gol_btn"onClick={() => { props.navigation.navigate("Home") }} >Annuler</button>
        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
   
      


  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  search: actions.searchPatient
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

export default connect(mapStateToProps, mapActionToProps)(SearchPatient);
