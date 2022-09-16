import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles.css";
import '../../Pages/home.css';
import axios from "axios";
import {MDBCardText, MDBBadge,MDBCard, MDBCardTitle,MDBContainer, MDBRow, MDBCol, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdb-react-ui-kit';
const baseURL = "https://a72a-41-229-134-62.eu.ngrok.io";
export default function ListDate1() {
  const [post, setPost] = React.useState();
//var data1="1654856397509";
var data1=localStorage.getItem("dataIot");
  React.useEffect(() => {
    console.log(data1)
    axios.get(`${baseURL}/search/${data1}`).then((response) => {
      setPost(response.data);
    });
  },[]);
  var data2=[];
    if(post!=undefined){
     //create array of data array
     var data2=[];
      for(var i=0;i<post.i.length;i++){
        data2.push([post.i[i],post.v[i]]);
      }
      //options.series[0].data = [...data2];
      //copy part of array to new array
      var data3=[];
      for(var i=399;i<800;i++){
        data3.push([post.i[i],post.v[i]]);
      }
      //options.series[1].data = [...data3];
      
     }
  
 var options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "My chart"
  },
  legend: {
    layout: 'vertical',
    floating: true,
    align: 'left',
    x: 100,
    verticalAlign: 'top',
    y: 70
},
  series: [
    {
      data:data3
    }
  ]
};

options.series[0].data=data3;
  if (!post) return null;
  return (
    <section className="landing-background">
    <div style={{backgroundsize: "cover"}}>
    <div  class="container">
       <MDBCard style={{ maxWidth: '600px' }}>
      <MDBCardBody>
    <HighchartsReact class="highcharts-background" highcharts={Highcharts} options={options} />
    </MDBCardBody>
    </MDBCard>
    </div></div>
      </section>
  );

}