import { Text, View,Image,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
        <div className="row">
        <div className="col-lg-6">  
            

<Image
  style={{
    width: 100%Component,
    height: 450,
    marginHorizontal:40 ,  

    

    
  }}
             source={require("../assets/pic2.jpg")} />
          
        </div>
        <div className="col-lg-5" id="div2" style={{padding: "0px 148px;",textAlign:'center'}}>
            <h1 id="h2">Know More About Us</h1>
            <p id="p2">
                Greencubes is one of the best website design company in India. Because of our strategic implementation
                and expert consultation, we have help our clien business to grow. <br /> <br />
                We provide small and large-scale website solutions on WordPress, Shopify, and Laravel. Our aim is to
                provide quality and reliable solutions to clients at an effective cost. We have built websites for
                almost all industry segments whether it is Healthcare, Media, Business, Education, Furniture, Travel,
                Real Estate, or Retail. We are proud to have a team of 4+ years of experienced developers and designers.
                It is difficult to decide which website design company in Ahmedabad will provide you with all the
                requirements and so we are here to help you. At Greencubes, we understand how important an online
                website is for clients and so we design a flawlessly mobile website that can attract more customers.
                <br /><br /><br />
                We make sure that your website is SEO compliant which will add more value to your business. We care
                about the growth of our customers. We are the go-to website design and development company you were
                looking for
            </p>
        </div>
    </div>
    )
  }
}

