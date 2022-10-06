import React from 'react';
import DisplayCard from './DisplayCard'
import EngineContext from './EngineContext';

class MainFeed extends React.Component{
  static contextType = EngineContext

  componentDidMount() {
    const engine = this.context
    console.log(engine) 
  }

  // constructor(props){
  //   super(props)
  //   this.state = {engines: []}
  // }

  // componentDidMount(){
  //   fetch('http://localhost:4000/engine')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     this.setState({engines: data});
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  render(){
    return (
        <div class="row">
            {
                this.context.engines.map((item) => {
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
        // <h1>{this.context.name}</h1>
        )
  }
}

export default MainFeed;