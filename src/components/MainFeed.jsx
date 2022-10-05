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
  }

  render(){
    return (
        <div class="row">
            {
                this.state.engines.map((item) => {
                    if(item.id % 2 == 0)
                        return(
                            <div className="col-6 py-3 d-flex justify-content-center">
                                <DisplayCard key={item.id} engine={item}/>
                            </div>
                        )
                    else
                        return (
                            <div className="col-6 py-3 d-flex justify-content-center">
                                <DisplayCard key={item.id} engine={item}/>
                            </div>
                        )
                })               
            }
        </div>
        )
  }
}

export default MainFeed;