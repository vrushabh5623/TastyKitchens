import { Component } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Cookies from 'js-cookie'
import Header from '../Header'
import Popular from '../Popular'
import Footer from '../Footer'
import './index.css'


  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
}

class Home extends Component{
  state = {
    bannerlist:[]
  }


  componentDidMount = () =>{
    this.renderBannerurl()
  }

  renderBannerurl = async() =>{
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers:{
        Authorization: `Bearer ${jwtToken}`,
      },
      method:'GET'
    }
    const response = await fetch(url,options)
    const data = await response.json()
    if(response.ok === true){
      const updateBannerlist = data.offers.map(eachItem=>({
        id:eachItem.id,
        bannerurl:eachItem.image_url
      }))
      this.setState({
      bannerlist:updateBannerlist
    })
    }
  }

 
render(){
  const {bannerlist} = this.state
  return(
  <div className='home-bg'>
    <Header/>
    <div className="slider-container">
      <Slider {...settings}>
        {bannerlist.map(eachItem => (
          <div key={eachItem.id}>
            <img
              src={eachItem.bannerurl}
              className="home-banner"
              alt="offer"
            />
          </div>
        ))}
      </Slider>
    </div>

    <div className='popular-cotainer'>
      <Popular/>
    </div>
    <Footer/>
  </div>
  )
}}

export default Home