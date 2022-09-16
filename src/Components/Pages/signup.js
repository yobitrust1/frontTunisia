import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { Text, View, Image} from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import SideNav from '../Form/SideNav'
import "bootstrap/dist/css/bootstrap.min.css";
import docc from"../img/doc.png";
import diss from"../img/dis.jpg";
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)

const Signup = (props) => {
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
    }, [props.loggedUser])
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [hospitalName,setHospitalName ] = useState();
  const [medicalServiceName, setMedicalServiceName] = useState();
  const [address, setAddress] = useState();
 


  const handleHospitalNameChange = (text) => {
    setHospitalName(text.target.value)

  }
  const handleMedicalServiceNameChange = (text) => {
    setMedicalServiceName(text.target.value)

  }
  const handleAddressChange = (text) => {
    setAddress(text.target.value)

  }
  const handleUsernameChange = (text) => {
    setUsername(text.target.value)

  }

  const handlePasswordChange = (text) => {
    const hashedPassword = bcrypt.hashSync(text.target.value, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up

    setPassword(hashedPassword)

  }

  const handleSubmit = (e) => {
    const values = {
      username: username,
      password: password,
      hospitalName:hospitalName,
      medicalServiceName:medicalServiceName,
      address:address,
      
    }
    e.preventDefault();
    props.signup(values);
    console.log(values)
    console.log(localStorage.getItem("loggedUser1"))
    if(props.loggedUser1 == "Ok"){
      props.navigation.navigate("Home")
    }
  }
  return (
<div >
<div >
<SideNav />
 
<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
      </div>
      <section class="login-block">
    <div class="container">
  <div class="row">
    <div class="col-md-4 login-sec">
        <h2 class="text-center">Login User </h2>
        
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Username</label>
    <input type="text" class="form-control" onChange={handleUsernameChange} placeholder=""/>
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
    <input type="password" class="form-control" onChange={handlePasswordChange} placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Hospital Name</label>
    <input type="text" class="form-control" onChange={handleHospitalNameChange} placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Medical Service Name</label>
    <input type="text" class="form-control" onChange={handleMedicalServiceNameChange} placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleAddress" class="text-uppercase">Address</label>
    <input type="text" class="form-control" onChange={handleAddressChange} placeholder=""/>
  </div>
  
    <div class="form-check">
    
    <button type="submit" class="btn btn-in float-right" onClick={handleSubmit}>Se connecter</button>
  </div>
<div class="copy-text">Copyright2021 All rights reserved |<i class="fa fa-heart"></i> <a href="http://grafreez.com">youbitrust</a></div>
    </div>
    <div class="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                 <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
              
                  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src={docc}/>
      <div class="carousel-caption d-none d-md-block">
       
    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src={diss} alt=""/>
      <div class="carousel-caption d-none d-md-block">
       
    </div>
  </div>
            </div>     
        
    </div>
  </div>
</div>
</div>
</section>
</div>
    <ParticlesBg color="#9acfce" num={200} type="cobweb" bg={true} />
    </div>
    
   
  );
};


const mapStateToProps = (state) => ({
  loggedUser1: state.medicalService.loggedUser1,
});
const mapActionToProps = {
  signup: actions.signup,
};
export default connect(mapStateToProps, mapActionToProps)(Signup);

