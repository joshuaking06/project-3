import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.scss'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import FlashMessages from './components/common/FlashMessages'
import UserShow from './components/Auth/UserShow'
import CitiesShow from './components/Cities/CitiesShow'
import CitiesIndex from './components/Cities/CitiesIndex'
import ContinentsShow from './components/Continents/ContinentsShow'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import CitiesInfo from './components/Cities/CitiesInfo'
import PostsAll from './components/Cities/PostsAll'
import Popular from './components/common/popular'


import ResetPassword from './components/Auth/ResetPassword'
import NewPassword from './components/Auth/NewPassword'
import Confirm from './components/Auth/Confirm'
import LoadingPage from './components/common/LoadingPage'


class App extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <div>
        <BrowserRouter>
          <main>
            <Navbar />
            <FlashMessages />
            <Switch>
              <Route path="/cities/:id/info" component={CitiesInfo} />
              <Route path="/posts" component={PostsAll} />
              <Route path="/cities/:id" component={CitiesShow} />
              <Route path="/popular" component={Popular} />
              <Route path="/loading" component={LoadingPage} />
              <Route path="/cities" component={CitiesIndex} />
              <Route path="/users/:id" component={UserShow} />
              <Route path="/register" component={Register} />
              <Route path="/confirm/:code" component={Confirm} />
              <Route path="/login" component={Login} />
              <Route path="/resetpassword" component={ResetPassword} />
              <Route path="/newpassword/:id" component={NewPassword} />
              <Route path="/continents/:id" component={ContinentsShow} />
              <Route path="/" component={Home} />

            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
