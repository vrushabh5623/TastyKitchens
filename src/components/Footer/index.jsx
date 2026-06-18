import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import './index.css'

const Footer = () =>{
  return(
    <div className='footer-bg'>
      <div className='logo-head'>
        <img src='https://i.postimg.cc/1RGTGzph/Frame-275.png' alt='footer-logo' className='footer-logo' />
        <h1 className='tasty-header-head2'>Tasty Kitchens</h1>
      </div>
      <p className='footer-para'>The only thing we are serious about is food.</p>
      <p className='footer-para'>Contact us on</p>
      <div className="icons-div">
        <FaPinterest className="icons"/>
        <FaInstagram className="icons"/>
        <FaTwitter className="icons"/>
        <FaFacebookSquare className="icons"/>
      </div>
    </div>
  )
}

export default Footer