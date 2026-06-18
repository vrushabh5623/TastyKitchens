import { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "../Header";
import Cookies from 'js-cookie'
import AddBannerPart from "../AddBannerPart";
import AddDetails from "../AddDetails";
import Footer from "../Footer";
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS'
}
class AddFood extends Component{
  state = {
    apiStatus: apiStatusConstant.initial,
    addCostlist:[],
    addDataItemsList:[],
  }

  componentDidMount = () =>{
    this.getAddData()
  }

  getAddData = async() =>{
    this.setState({
      apiStatus:apiStatusConstant.inProgress
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken =  Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers:{
        Authorization:`Bearer ${jwtToken}`
      },
      method: 'GET',
    }
    const response = await fetch(url,options)
    const data = await response.json()
    // console.log(data)
    if(response.ok === true){
      const updateAddData = {
        costfortwo:data.cost_for_two,
        cuisine:data.cuisine,
        id:data.id,
        imageurl:data.image_url,
        name:data.name,
        rating:data.rating,
        itemcount:data.items_count,
        location:data.location,
        openat:data.opens_at,
        reviewcount:data.reviews_count
      }
      const updateItems = data.food_items.map(eachItem=>({
        cost:eachItem.cost,
        foodtype:eachItem.food_type,
        id:eachItem.id,
        imageurl:eachItem.image_url,
        name:eachItem.name,
        rating:eachItem.rating
      }))
      this.setState({addCostlist:updateAddData,addDataItemsList:updateItems,apiStatus:apiStatusConstant.success})
    }
    if(response.status === 400){
      this.setState({apiStatus:apiStatusConstant.failure})
    }
  }

  
  renderSuccess = () =>{
    const {addCostlist,addDataItemsList} = this.state
    return(
    <div>
      <AddBannerPart eachAddData={addCostlist}/>
      <div className="add-datails-container">
        <AddDetails eachDataItem={addDataItemsList}/>
      </div>
    </div>
    )
  }


  renderAddResult = () =>{
    const {apiStatus} = this.state
    switch(apiStatus){
      case apiStatusConstant.success:
        return this.renderSuccess()
      case apiStatusConstant.failure:
        return <p>failure</p>
      case apiStatusConstant.inProgress:
        return <p>inprogress</p>
      default:
        return null
    }
  }


  render(){
    const {addCostlist,addDataItemsList} = this.state
    return(
      <div className="food-main-container">
        <Header/>
        <div>
          {this.renderAddResult()}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default AddFood