import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MdCurrencyRupee } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import './index.css'


class AddDetails extends Component{
  addBtn = () =>{
    const {history} = this.props
    history.replace('/cart')
  }

  render(){
    const {eachDataItem} = this.props
    // console.log(eachDataItem)
    return(
      <div className="add-Details-row-container"> 
        {
          eachDataItem.map(eachItem=>(
              <div className="add-details-image-head" key={eachItem.id}>
                <img src={eachItem.imageurl} alt={eachItem.id} className="add-details-logo"/>
                <div className="detail-align-para">
                  <h1 className="details-head">{eachItem.name}</h1>
                  <p className="rupee-para"><MdCurrencyRupee />{eachItem.cost}</p>
                  <h1 className="rating-head"><IoStar className="star-icon2"/> {eachItem.rating}</h1>
                  <button className="details-btn" type="button" onClick={this.addBtn} >Add</button>
                </div>
              </div>
          ))
        }
      
      </div>
    )
  }
}

export default withRouter(AddDetails);