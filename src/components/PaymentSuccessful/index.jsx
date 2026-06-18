import { Component } from "react";
import { FaCheckCircle } from "react-icons/fa";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../Header";
import './index.css'

class PaymentSuccessful extends Component{
  gotoHomePage = () =>{
    const {history} = this.props
    history.replace('/home')
  }

  render(){
    return(
      <div>
        <Header/>
        <div className="payment-container">
          <FaCheckCircle className="payment-icon"/>
          <h1 className="payment-head">Payment Successful</h1>
          <p className="payment-para">Thank you for ordering</p>
          <p className="payment-para">Your payment is successfully completed.</p>
          <button className="payment-btn" onClick={this.gotoHomePage}>Go To Home Page</button>
        </div>
      </div>
    )
  }
}

export default PaymentSuccessful