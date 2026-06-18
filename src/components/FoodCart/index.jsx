import { Component } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from '../Footer'
import Header from '../Header'
import './index.css'

class FoodCart extends Component{
  state = {
    count: 1
  }

  onPlaceOrder = () =>{
    const {history} = this.props
    history.replace('/payment')
  }

  onSubstarct = () =>{
    this.setState(preveState=>{
      if (preveState.count > 1){
        return {count: preveState.count -1}
      }
      return null
      })
  }


  onAddition = () =>{
    this.setState(preveState=>({
      count: preveState.count + 1
    }))
  }

  render(){
    const {count} = this.state
    return(
      <div>
        <Header/>
        <div className="cart-container">
          <div className="item-div">
            <p className="item-width1">Items</p>
            <p className="item-width2">Quantity</p>
            <p className="item-width3">Price</p> 
          </div>
          <div className="align-div">
            <div className="image-head">
              <img src="https://www.franchisezing.com/franchise/wp-content/uploads/2016/02/chole-bhature.jpg" alt="" className="add-details-logo2"/>
              <h1 className="details-head-cart">Prawn Spcial</h1>
            </div>
            <div className="add-sub">
              <h1 className="details-head-cart2">Prawn Spcial</h1>
              <button className="minut-btn" onClick={this.onSubstarct}><CiSquareMinus className="minus-icon"/></button>
              <p className="count-item">{count}</p>
              <button className="plus-btn" onClick={this.onAddition}><CiSquarePlus className="minus-icon"/></button>
            </div>
            <div className="price">
              <p className="rupee-cart"><MdCurrencyRupee /> 20000.00</p>
            </div>
          </div>
          <div className="align-div">
            <div className="image-head">
              <img src="https://www.franchisezing.com/franchise/wp-content/uploads/2016/02/chole-bhature.jpg" alt="" className="add-details-logo2"/>
              <h1 className="details-head">Prawn Spcial</h1>
            </div>
            <div className="add-sub">
              <button className="minut-btn"><CiSquareMinus  className="minus-icon"/></button>
              <p className="count-item">3</p>
              <button className="plus-btn" ><CiSquarePlus className="minus-icon"/></button>
            </div>
            <div className="price">
              <p className="rupee-cart"><MdCurrencyRupee /> 20000.00</p>
            </div>
          </div>

          <hr className="cart-hr"/>
          <div className="total-price-div">
            <p className="total-order">Order Total:</p>
            <p className="total-price"><MdCurrencyRupee /> 8000.00</p>
          </div>
          <div className="place-div">
            <button className="place-order-btn" onClick={this.onPlaceOrder}>Place Order</button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default FoodCart