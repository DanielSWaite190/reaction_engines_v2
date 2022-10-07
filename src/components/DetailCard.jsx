import React from 'react';
import Card from 'react-bootstrap/Card';
import withRouter from "./withRouter";
import EngineContext from './EngineContext';

class MainFeed extends React.Component{
	static contextType = EngineContext

	constructor(props){
			super(props)
			this.state = {
					detail: 0,
					test: 0
			}
	}
	
	render(){
		return(
			<div>
			{
				this.context.engines.filter(e => e.id === this.props.params.id).map(filteredEngine => (
					<Card style={{ width: '40rem' }} className='mx-auto'>

					<Card.Img
					height='auto'
					bg='dark'
					variant='top'
					src={filteredEngine.image}
					/>

					<Card.Body>

					<Card.Title>
							{/* <Link to={`/${this.props.engine.name}`}>{this.props.name}</Link> */}
							<h2>{filteredEngine.name}</h2>
					</Card.Title>

					<Card.Text as='div'>
							<h2>Cycle Type: {filteredEngine.cycle_type}</h2>
							<h2>Fule: {filteredEngine.fule_type}</h2>
							<h2>Thrust: {filteredEngine.thrust}</h2>
							<h2>Thrust To Weight Ration:  {filteredEngine.thrust_to_weight}</h2>
							<h2>Specific Impulse (Sea Level):  {filteredEngine.specific_impulse_cl}</h2>
							<h2>pecific Impulse (vacuum): {filteredEngine.specific_impulse_vac}</h2>
							<h2>Chamber Pressure: {filteredEngine.pressure}</h2>
					</Card.Text>

					</Card.Body>

					</Card>
				))
			}

		</div>
		)
	}
}

export default withRouter(MainFeed);

//I thought you need a constructor for props 
