import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import './index.css'

const AddBannerPart = (props) =>{
  const {eachAddData} = props
  const {
    costfortwo,
        cuisine,
        id,
        imageurl,
        name,
        rating,
        itemcount,
        location,
        openat,
        reviewcount,
  } = eachAddData
  return(
    <div className='banner-container'>
      <div className='banner-div'>
        <img src={imageurl} alt={id} className='banner-logo'/>
        <div>
          <h1 className='banner-head'>{name}</h1>
          <p className='cuisine-para'>{cuisine}</p>
          <div className="banner-rating-div">
            <div>
              <h1 className="banner-ratint-head"><MdOutlineStarPurple500 className="banner-star-icon"/> {rating}</h1>
              <p className="rating-para">({reviewcount} rating)</p>
            </div>
            <div className="verticle-line">
            </div>
            <div>
              <h1 className="banner-ratint-head"><MdCurrencyRupee className="banner-star-icon"/> {costfortwo}</h1>
              <p className="rating-para">cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBannerPart