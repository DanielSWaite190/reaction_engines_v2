import React from 'react';

class MainFeed extends React.Component{
  constructor(props){
    super(props)
    }

  render(){
    return (
        <div>
            <h3>Card: {this.props.engine.name}</h3>
        </div>
    );
  }
}

export default MainFeed;