import { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from 'js-cookie'
import './index.css'


class Header extends Component{
  onLogout = () =>{
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render(){
  return(
    <div className='Header-bg'>
      <div className='logo-home-cart'>
        <Link to='/' className='link'>
        <div className='logo-head-div'>
          <img src='https://i.postimg.cc/FzwrZr6w/Frame-274.png' alt='header-logo' className='header-logo'/>
          <h1 className='tasty-header-head'>Tasty Kitchen</h1>
          <h1 className='tasty-header-head'>Tasty Kitchen</h1>
        </div>
        </Link>
        <ul className='unlist'>
          <li className='home-head'>
            <Link to='/' className='link'>Home</Link>
          </li>
          <li className='home-head'>
            <Link to='/cart' className='link'>Cart</Link>
          </li>
          <li>
            <button className='logout-btn' type='button' onClick={this.onLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
}
export default withRouter(Header)