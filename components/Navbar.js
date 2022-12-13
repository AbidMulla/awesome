import { Text, View } from 'react-native'
import React, { Component } from 'react'
import "../style/navbar.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



export default class Navbar extends Component {
  render() {
    return (
      <View>
       <view className="container-fulied">
        <view className="row">
            <nav className="navbar">
                <view className="navbar-container container">
                    <input type="checkbox"/>
                    <view className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </view>
                    <ul className="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <h1 className="logo">GREENCUBES</h1>
                </view>
            </nav>
        </view>
    </view>
      </View>
    ) 
  }
}