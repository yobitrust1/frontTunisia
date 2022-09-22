import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormInput from "../../Form/FormInput";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { Text, View, Image} from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import '../login.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import SideNav from '../../Form/SideNav'
import "bootstrap/dist/css/bootstrap.min.css";
import docc from"../../img/doc.png";
import diss from"../../img/dis.jpg";

const Admin = (props) => {
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
  }, [props.loggedUserAdmin])
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();



  const handleUsernameChange = (text) => {
    setUsername(text.target.value)

  }

  const handlePasswordChange = (text) => {
    setPassword(text.target.value)

  }

  const handleSubmit = (e) => {
    const values = {
      username: username,
      password: password
    }
    console.log(values)
    e.preventDefault();
    props.loginAdmin(values);
    
    console.log(localStorage.getItem("loggedUserAdmin"))
  }

  return (
<div >
<div >
<SideNav />
 
<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
{(props.loggedUserAdmin !== null) && typeof (props.loggedUserAdmin) !== 'string' && (props.navigation.navigate("HomeAdmin"))}
      </div>

      {(props.loggedUserAdmin !== null) && typeof (props.loggedUserAdmin) !== 'string' && (props.navigation.navigate("HomeAdmin"))}
      

      <section class="login-block">
    <div class="container">
  <div class="row">
    <div class="col-md-4 login-sec">
        <h2 class="text-center">Login Admin</h2>
        
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Username</label>
    <input type="text" class="form-control" onChange={handleUsernameChange} placeholder=""/>
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
    <input type="password" class="form-control" onChange={handlePasswordChange} placeholder=""/>
  </div>
  
  
    <div class="form-check">
    
    <button type="submit" class="btn btn-in float-right" onClick={handleSubmit}>Se connecter</button>
    <button  class="btn btn-in float-right" onClick={() => { props.navigation.navigate("Open") }}>Retour</button>
  </div>
<div class="copy-text">Copyright2020 All rights reserved |<i class="fa fa-heart"></i> <a href="http://yobitrust.com/">youbitrust</a></div>
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
  loggedUserAdmin: state.medicalService.loggedUserAdmin,
});
const mapActionToProps = {
  loginAdmin: actions.loginAdmin,
};
export default connect(mapStateToProps, mapActionToProps)(Admin);