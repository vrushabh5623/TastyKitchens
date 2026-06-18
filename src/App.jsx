import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import AddFood from './components/AddFood'
import FoodCart from './components/FoodCart'
import PaymentSuccessful from './components/PaymentSuccessful'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={LoginPage}/>
      <ProtectedRoute path='/addfood/:id' component={AddFood}/>
      <ProtectedRoute path='/payment' component={PaymentSuccessful}/>
      <ProtectedRoute path='/cart' component={FoodCart}/>
      <ProtectedRoute path='/' component={Home}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
