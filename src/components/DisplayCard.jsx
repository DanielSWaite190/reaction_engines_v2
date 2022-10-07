import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


class MainFeed extends React.Component{
  render(){
    return(
        <Card style={{ width: '18rem' }} className='mx-auto'>

        <Card.Img
          width='286'
          height='286'
          bg='dark'
          variant='top'
          src={this.props.engine.image}
        />

        <Card.Body>

          <Card.Title>
            <h1><Link to={`/engine/${this.props.engine.id}`}>{this.props.engine.name}</Link></h1>
          </Card.Title>

          <Card.Text as='div'>
            <h2>Type: {this.props.engine.cycle_type}</h2>
            <h2>Fule: {this.props.engine.fule_type}</h2>
            <h2>Thrust: {this.props.engine.thrust}</h2>
          </Card.Text>

        </Card.Body>

      </Card>
    )
  }
}

export default MainFeed;

//I thought you need a constructor for props 
