import React, { Component } from "react";
import axios from "axios";
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card, Row, Col, Container} from 'react-bootstrap';
import {FaHeart} from "react-icons/fa";
import {FiHeart} from "react-icons/fi";

interface Post {
  _id: string;
  author: string;
  title: string;
  content: string;
  date_posted: string;
  likes: number;
}

class Home extends Component {
  state: { err: string; data: Post[], username: string, message: string } = { err: "", data: [], username: '', message: '' };

  constructor(props: any) {
    super(props);
    this.setData();
  }

  setData() {
    axios.get("http://127.0.0.1:5000/post").then((res) => {
      this.setState({ data: res.data });
    });
  }

  home = (e: any) => {
    this.setData();
  };

  delete = (e: any) => {
    const post_id = {post_id: (document.getElementById("post_id") as HTMLInputElement).value
    }
    console.log(post_id.post_id)
    axios.delete(`http://127.0.0.1:5000/post/${post_id.post_id}`, {
      headers:{
        'Authorization': 'Bearer' + localStorage.getItem('token')}
    })
    .then((res)=> {
      if(res.data.success) {
        this.setState({message: res.data.success})
        setTimeout(() => window.location.href = '/Home', 800)
      }
    })
  }

  liked = async() => {
      await axios.patch("http://127.0.0.1:5000/like", {
        _id: (document.getElementById("post_id") as HTMLInputElement).value,
        likes: (document.getElementById("likes") as HTMLInputElement).value
      }, {
        headers:{
          'Authorization': 'Bearer' + localStorage.getItem('token')}
      } )
      .then((res) => {
        if(res.data) {
            (document.getElementById("likes") as InnerHTML).innerHTML = res.data
            console.log(res.data)
        }
      })
    } 




  renderData(post: Post) {
      return (
        <Container>
          <Card border="light" style={{margin: 'auto', width: '70%'}} className="text-center">
            <Card.Header style={{background: '#C6F5FF'}} as="h3"> {post.title}</Card.Header>
            <Card.Body style={{background: '#E3FAFF'}}>
              <Row>
                <Col>
                    <Card.Text><strong>Author: </strong> {post.author}</Card.Text>
                    <Card.Text hidden>{post._id}</Card.Text>
                    <input type="text" id="post_id" value={post._id} hidden readOnly></input>
                </Col>
                <Col>
                    <Card.Text><strong>Date Posted: </strong>{post.date_posted}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col xs={13} md={10}><Card.Text className="posts">{post.content}</Card.Text></Col>
                <Col xs={2} md={2}>
                  <Row>
                    <Col xs={14} md={10}>{post.author === localStorage.getItem('username') ? <Button key='delete' variant="outline-primary" id="delete" onClick={this.delete}>Delete</Button> : '' }</Col>
                    <Col xs={14} md={10}>{localStorage.getItem("token") && <Button id="heart" onClick={this.liked} onChange={this.liked}><FiHeart /> {post.likes}</Button>}</Col>
                    <input type="text" id="likes" hidden readOnly value={post.likes}></input>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        
      )
  }

  render() {
    return (
      <div className="app">
        <h1 className="header">Home Page</h1>
          {this.state.data.map((post) => (
            <div style={{margin: '1%'}}>
              {this.renderData(post)}
            </div>
          ))}
      </div>
    );
  }
}


export default Home;