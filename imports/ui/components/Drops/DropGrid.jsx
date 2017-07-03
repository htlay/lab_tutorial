import React, {Component} from 'react';
import {Link} from 'react-router';


export default class DropGrid extends Component {

  render() {
    let product = this.props.product;

    return (

      <div className="col-sm-4">
        <img className="img-responsive" src={product.images[0]} />
        <h2 className="text-center">{product.product_name}</h2>
        <div className="text-center">
          <h2>  <span> ${product.org_price}</span> </h2>
          <Link to={'/drop/' + product.product_id}>
            <button className="btn btn-primary">Participant Now</button>
          </Link>
      </div>
      </div>

    )
  }
}
