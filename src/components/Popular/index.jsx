import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import Cookies from 'js-cookie'
import './index.css'

class Popular extends Component{

  state = {
    filter:'Lowest',
    restaurantsList:[],
  }

  componentDidMount = () =>{
    this.getPopularData()
  }

  onChangeOption = (event) =>{
    this.setState({
      filter: event.target.value
    },this.getPopularData)
  }

  getPopularData = async() =>{
    const {filter} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url =  `https://apis.ccbp.in/restaurants-list?search=hotel&offset=0&limit=9&sort_by_rating=${filter}`
    const options = {
      headers:{
        Authorization: `Bearer ${jwtToken}`
      },
      method:'GET'
    }
    const response = await fetch(url,options)
    const data = await response.json()
    // console.log(data)
    if(response.ok === true){
      const updateList = data.restaurants.map(eachItem=>({
        id:eachItem.id,
        costfortwo:eachItem.cost_for_two,
        cuisine:eachItem.cuisine,
        groupbytime:eachItem.group_by_time,
        hasonlinedelivary:eachItem.group_by_time,
        hastablebooking:eachItem.has_table_booking,
        imageurl:eachItem.image_url,
        isdeliveringnow:eachItem.is_delivering_now,
        location:eachItem.location,
        menutype:eachItem.menu_type,
        name:eachItem.name,
        opensat:eachItem.opens_at,
        rating:eachItem.user_rating.rating,
        ratingcolor:eachItem.user_rating.rating_color,
        ratingtext:eachItem.user_rating.rating_text,
        totalreviews:eachItem.user_rating.total_reviews
      }))


      this.setState({restaurantsList:updateList,
      })
    }
  }

  render(){
    const{restaurantsList} = this.state
    // console.log(restaurantsList)
    return(
      <div>
        <h1 className="popular-head">Popular Restaurants</h1>
        <div className="select-para-icon">
          <p className="select-para">Select Your favourite restaurant special dish and make your day happy...</p>
          <div className="sort-div">
              <><MdOutlineSort className="filter-icon"/></>
            
            <select className="sort-option" onChange={this.onChangeOption}>
              <option value='Lowest'>Sort by Lowest</option>
              <option value='Highest'>Sort by Highest</option>
            </select>
          </div>
        </div>
        <hr className="hr-tag"/>
        <div className="image-rating-main-container">
          {
            restaurantsList.map(eachItem=>(
              <Link to={`/addfood/${eachItem.id}`} key={eachItem.id} className='link'>
              <div className="image-rating-div" key={eachItem.id}>
                <div>
                  <img src={eachItem.imageurl} alt={eachItem.id} className="popular-img"/>
                </div>
                <div>
                  <h1 className="mc-head">{eachItem.name}</h1>
                  <p className="type-para">{eachItem.cuisine}</p>
                  <div className="rating-div">
                    <><MdOutlineStar className="star-icon"/></>
                    <p className="rating-number">{eachItem.rating}</p>
                    <p className="rating-para">({eachItem.totalreviews} ratings)</p>
                  </div>
                </div>
              </div>
              </Link>

            ))
          }
        </div>
      </div>
    )
  }
}

export default Popular