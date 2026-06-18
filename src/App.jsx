import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import AddFood from './components/AddFood'
import FoodCart from './components/FoodCart'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={LoginPage}/>
      <Route path='/addfood/:id' component={AddFood}/>
      <Route path='/cart' component={FoodCart}/>
      <Route path='/' component={Home}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
