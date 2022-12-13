import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
        <div className="row justify-content-md-center p-5">
        <div className="col-md-2 ">
            <h1 className="number text-center">220</h1>
            <p className="para text-center">websites developed</p>
        </div>
        <div className="col-md-2">
            <h1 className="number text-center">110</h1>
            <p className="para text-center">website designed</p>
        </div>
        <div className="col-md-2 ">
            <h1 className="number text-center">10</h1>
            <p className="para text-center">yours of experiance</p>
        </div>
        <div className="col-md-2">
            <h1 className="number text-center">50</h1>
            <p className="para text-center">mobile app developed</p>
        </div>
    </div>

    )
  }
}