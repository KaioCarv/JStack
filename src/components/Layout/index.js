import React from "react";
import {BrowserRouter, Link} from "react-router-dom"

import Header from "../Header";
import Route from "../../Routes";
import Footer from "../Footer";

import {Nav} from "./styles"

export default class Layout extends React.Component {
  // componentDidMount(){
  //   console.log('componente montou')
  //   document.addEventListener('scroll', this.handleScroll)
  // }

  // componentWillUnmount(){
  //   console.log('componente vai desmontar...');
  //   document.removeEventListener('scroll', this.handleScroll)
  // }

  // handleScroll = () =>{
  //   console.log( 'Scrolled...');
  // };

  render() {
    return (
      <BrowserRouter>
        <Header />

        <Nav>
          <Link to= "/">Home</Link>
          <Link to= "/posts">Posts</Link>
        </Nav>

        <Route />
        <Footer />
      </BrowserRouter>
    );
  }
}
