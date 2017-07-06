import React, {Component} from 'react';

export default class DropProgressBar extends Component {

  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-success" style= {{width: '35%'}}>
          <span className="sr-only">35% Complete (success)</span>
        </div>

        {/* <div className="progress-bar progress-bar-warning progress-bar-striped" style={{width: '20%'}}>
          <span className="sr-only">20% Complete (warning)</span>
        </div>
        <div className="progress-bar progress-bar-danger" style={{width: '10%'}}>
          <span className="sr-only">10% Complete (danger)</span>
        </div> */}
      </div>

    )
  }
}
