import { Component } from "react";
import axios from "axios"
import {Button, Row, Col, Container, FloatingLabel, Form} from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';




class Login extends Component {
  state = {err: "", logged_in: "", loading: false};


  login = (e: any) => {
    e.preventDefault();
    this.setState({loading: true})
    axios.post("/login", {
      username: (document.getElementById("username") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value
    })
    .then((res) => {
      if (res.data.error) {
        this.setState({loading: false})
        this.setState({err: res.data.error})
      }
      else if(res.data) {
        this.setState({err: ''})
        this.setState({loading: false})
        this.setState({logged_in: "Login successful"})
        localStorage.setItem("token", res.data.access_token)
        localStorage.setItem("username", res.data.username)
        setTimeout(()=>window.location.href = '/Home', 200)
      }
    });
  }
  render() {
    return (
        <Container className="body">
          <div className="user">
            <h1 className="text-center">Login</h1>
            <hr></hr>
            <form onSubmit={this.login}>
              <Row>
                <Col>
                  <FloatingLabel label="Username" className="mb-3">
                    <Form.Control type="text" id="username" placeholder="username" required />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="Password" className="mb-3">
                    <Form.Control type="password" id="password" placeholder="Password" required />
                  </FloatingLabel>
                </Col>
              </Row>
              {this.state.loading ? <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="outlined" className='loadingButton' >Loading</LoadingButton> : <Button type="submit" variant="outline-primary" className='button'>Login</Button>}
            </form>
            {this.state.err ? 
              <Alert variant="filled" severity="error" className="message"> {this.state.err} </Alert> :
              this.state.logged_in &&  <Alert variant="filled" severity="info" className="message">
              {this.state.logged_in}
              </Alert> }
          </div>
        </Container>

      
      
    );
  }
}

  export default Login;