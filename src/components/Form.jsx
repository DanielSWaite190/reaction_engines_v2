import React from 'react';

class EditForm extends React.Component{
    constructor(props){  // Probably don't need theses two.
        super(props)     // Probably don't need theses two.
        this.state = {
            name: 'travel',
            cycle_type: '',
            fule_type: '',
            thrust: '',
            thrust_to_weight: '',
            specific_impulse_cl: '',
            specific_impulse_vac: '',
            pressure: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async postEngine(engine) {
        const url = this.props.config['id'] ? 
        `http://localhost:4000/engine/${this.props.config['id']}` :
        `http://localhost:4000/engine`;

        // const url = `http://localhost:4000/engine/7`

        try {
            fetch(url, {
                method: this.props.config['method'],
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(engine)
            });
        console.log('Engine Posted: ', engine);
        this.props.callback()

        } catch(error) {
            console.log(error.message);
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.postEngine(this.state)

        alert('A name was submitted: ' + this.state.fule_type + " " +this.state.cycle_type);
    }

    handleChange(event){
        this.setState({cycle_type: event.target.value});
        this.setState({fule_type: event.target.value});
    }

    render(){
        return(
            <div class="container my-5">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Cycle Type' value={this.state.cycle_type} onChange={(event) => this.setState({cycle_type: event.target.value})} />
                    <input type='text' placeholder='Fule Type' value={this.state.fule_type} onChange={(event) => this.setState({fule_type: event.target.value})} />

                    {/* <input type='text' placeholder='Name' value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                    <input type='text' placeholder='Cycle Type' value={this.state.cycle_type} onChange={(event) => this.setState({cycle_type: event.target.value})} />
                    <input type='text' placeholder='Fule Type' value={this.state.fule_type} onChange={(event) => this.setState({fule_type: event.target.value})} />
                    <input type='number' placeholder='Thrust' value={this.state.thrust} onChange={(event) => this.setState({thrust: event.target.value})} />
                    <input type='number' placeholder='Thrust To Weight' value={this.state.thrust_to_weight} onChange={(event) => this.setState({thrust_to_weight: event.target.value})} />
                    <input type='number' placeholder='Specific Inpulse Sea Level' value={this.state.specific_impulse_cl} onChange={(event) => this.setState({specific_impulse_cl: event.target.value})} />
                    <input type='number' placeholder='Specific Inpulse Vacuum' value={this.state.specific_impulse_vac} onChange={(event) => this.setState({specific_impulse_vac: event.target.value})} />
                    <input type='number' placeholder='Chamber Pressure' value={this.state.pressure} onChange={(event) => this.setState({pressure: event.target.value})} />
                    <input type='text' placeholder='image url' value={this.state.image} onChange={(event) => this.setState({image: event.target.value})} />                 */}
                    <button type='update' class="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditForm