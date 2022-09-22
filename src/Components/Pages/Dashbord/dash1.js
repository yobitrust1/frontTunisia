import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./upload-files.component";
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import FormButton from "../../Form/FormButton";
import FormButton3 from "../../Form/FormButton3";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import '../home.css';
import "../login1.css";
import mann from "../../img/maa.png";
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
function Dash1(props) {
  return (
    <div>
      <div className="bg-image"></div>
      <div className="bg-text2">
<Container >

    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>upload</h3>
        <h4>React upload Files</h4>
      </div>
      <UploadFiles />
      <FormButton3 title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />
    </div>
    </Container>
</div>

</div>
  );
}

export default Dash1;
