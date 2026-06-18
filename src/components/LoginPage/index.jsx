import { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "js-cookie";
import './index.css'


class LoginPage extends Component{
  state = {
    username:'',
    password: '',
    showerr: false,
    errMsg:''
  }

  
  renderSuccess = (jwtToken) =>{
    const {history} = this.props
    Cookies.set('jwt_token',jwtToken,{expires:30,path:'/'})
    history.replace('/')
    const {username,password} = this.state
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
  }

  onSubmitForm = async(event) =>{
    event.preventDefault()
    const {username,password} = this.state
    const userDetails = {username,password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url,options)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true){
      this.renderSuccess(data.jwt_token)
    }
    else{
      this.setState({
        showerr:true,
        errMsg: data.error_msg
      })
    }
  }

  

  onChangePassword = (event) =>{
    this.setState({password:event.target.value})
  }

  onChangeUsername = (event)=>{
    this.setState({username:event.target.value})
  }

  renderUserData = () =>{
    const{username} = this.state
    // console.log(username)
    return(
      <div>
        <label htmlFor="username" className="userlabel">USERNAME</label>
        <br/>
        <input id="username" type='text' value={username} onChange={this.onChangeUsername} className="userinput"/>
      </div>
    )
  }

  renderPassword = () =>{
    const{password} = this.state
    // console.log(password)
    return(
      <div>
        <label htmlFor="username" className="passlabel">PASSWORD</label>
        <br/>
        <input id="username" type='password' value={password}
        onChange={this.onChangePassword} className="passinput"/>
      </div>
    )
  }

  render(){
    const {showerr,errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken !== undefined){
      return <Redirectn to='/'/>
    }
    return(
      <div className="login-main-container">
        <div className="login-content-div">
            <form className="form-container-div" onSubmit={this.onSubmitForm}>
              <div className="logo-container">
                <img src="https://i.postimg.cc/FzwrZr6w/Frame-274.png" alt='testy-logo' className="testy-logo"/>
                <h1 className="tasty-head">Tasty Kitchens</h1>
                <h1 className="login-head">Login</h1>
              </div>
              <div>
                {this.renderUserData()}
                {this.renderPassword()}
                <div className="error-div">
                  {
                    showerr &&<p className="error-para">{errMsg}</p>
                  }
                </div>
              </div>
  
              <div className="submit-btn-div">
                <button type='submit' className="submitbtn">Login</button>
              </div>
            </form>
        </div>
        <div className="login-image-div">
        </div>
      </div>
    )
  }
}

export default LoginPage