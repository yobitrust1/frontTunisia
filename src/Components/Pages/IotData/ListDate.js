import axios from "axios";
import React from "react";
import '../../Pages/home.css';
import {MDBCardText,MDBCard,MDBCardBody,  MDBBtn } from 'mdb-react-ui-kit';
const baseURL = "https://a72a-41-229-134-62.eu.ngrok.io/getAllDate";
export default function App(props) {
  const [post, setPost] = React.useState(null);
  var handledateChange = (text) => {
    console.log(text);
    localStorage.setItem('dataIot', text);
    props.navigation.navigate("ListDate1")
  }
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
<section className="landing-background">
    <div style={{backgroundsize: "cover"}}>
      <div class="container">
      <MDBCard className='w-50'>
        <MDBCardBody>
        <h2>List Date</h2>
      <ul>
        {post.map((post) => (
          <li key={post.id}>
                  <MDBCardText value={post.date} onClick={() => handledateChange(post.date)}>{post.date}</MDBCardText>
</li>
        ))}
      </ul>

          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </div></div>
      </section>
  );
}