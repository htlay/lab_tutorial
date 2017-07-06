import React, {Component} from 'react';
export default class DropProgressCircle extends Component {
  render() {
    return (
      <button type="button" className="btn btn-default btn-circle btn-xl">
        $25.00<br/>
        <span className="need">10 need</span>
      </button>
    )
  }
}
