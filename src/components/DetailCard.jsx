import React from 'react';
import Card from 'react-bootstrap/Card';
import withRouter from "./withRouter";
import EngineContext from './EngineContext';


class MainFeed extends React.Component{
    static contextType = EngineContext

    componentDidMount() {
      const engine = this.context
      console.log(engine) 
    }


    render(){
        return(
            // <h1>{this.props.params.id}</h1>
            // <h1>{this.context.engine}</h1>
            <div>

            {
                this.context.engines.map((e) => 
                    <p>{e.name}</p>
                )
            }
            </div>

        //     <Card style={{ width: '18rem' }} className='mx-auto'>

        //     <Card.Img
        //     width='286'
        //     height='286'
        //     bg='dark'
        //     variant='top'
        //     src={this.props.engine.image}
        //     />

        //     <Card.Body>

        //     <Card.Title>
        //         {/* <Link to={`/${this.props.engine.name}`}>{this.props.name}</Link> */}
        //         <h2>{this.props.engine.name}</h2>
        //     </Card.Title>

        //     <Card.Text as='div'>
        //         <h2>Cycle Type: {this.props.engine.cycle_type}</h2>
        //         <h2>Fule: {this.props.engine.fule_type}</h2>
        //         <h2>Thrust: {this.props.engine.thrust}</h2>
        //         <h2>Thrust To Weight Ration:  {this.props.engine.thrust_to_weight}</h2>
        //         <h2>Specific Impulse (Sea Level):  {this.props.engine.specific_impulse_cl}</h2>
        //         <h2>pecific Impulse (vacuum): {this.props.engine.specific_impulse_vac}</h2>
        //         <h2>Chamber Pressure: {this.props.engine.pressure}</h2>
        //     </Card.Text>

        //     </Card.Body>

        // </Card>
        )
    }
}

export default withRouter(MainFeed);

//I thought you need a constructor for props 
