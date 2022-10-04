import React from 'react';
import DisplayCard from './DisplayCard'

class MainFeed extends React.Component{
  constructor(props){
    super(props)
    this.state = {engines: []}
  }

  componentDidMount(){
    fetch('http://localhost:4000/engine')
    .then((res) => res.json())
    .then((data) => {
      this.setState({engines: data});
    })
    .catch((error) => {
      console.error(error);
    });
    console.log(this.state)
  }

  render(){
    return (
        <div>
            {this.state.engines.map((item) => <DisplayCard key={item.id} engine={item}/>)}
        </div>
        )
  }
}

export default MainFeed;