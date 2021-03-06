import React from 'react'
import axios from 'axios'


import  { Grid, Header } from 'semantic-ui-react'

import CitiesEvents from './CitiesEvents'
import CitiesRestaurants from './CitiesRestaurants'
import LoadingPage from '../common/LoadingPage'

class CitiesInfo extends React.Component {

  constructor() {
    super()

    this.state={
      reload: true
    }
    this.reload = this.reload.bind(this)
  }

  reload(){
    axios
      .get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ city: res.data }))
      .then(() => this.setState({reload: !this.state.reload}))
  }

  componentDidMount(){
    axios
      .get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ city: res.data }))


  }

  render(){
    if(!this.state.city) return <LoadingPage />
    const { city } = this.state
    return(
      <div>
        <Header as='h1' className='heading'>Events & Eateries</Header>
        <Grid.Row>
          <CitiesEvents cityName={city.name} />
        </Grid.Row>
        <Grid.Row>
          <CitiesRestaurants cityName={city.name} />
        </Grid.Row>

      </div>
    )
  }
}
export default CitiesInfo
