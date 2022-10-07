import React from 'react';
import DisplayCard from './DisplayCard'
import EngineContext from './EngineContext';

class MainFeed extends React.Component{
  static contextType = EngineContext
  
  render(){
	return (
		<div className="row">
			{
				this.context.map((item) => {
					if(item.id % 2 === 0)
						return(
							<div key={item.id} className="col-6 py-3 d-flex justify-content-center">
								<DisplayCard engine={item}/>
							</div>
						)
					else
						return (
							<div key={item.id} className="col-6 py-3 d-flex justify-content-center">
								<DisplayCard engine={item}/>
							</div>
						)
				})               
			}
		</div>
		)
  }
}

export default MainFeed;