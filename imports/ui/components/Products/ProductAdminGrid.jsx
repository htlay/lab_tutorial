import React, {Component} from 'react';
import { Link } from 'react-router';

export default class ProductAdminGrid extends Component {

  render() {
    let product = this.props.product;

    return (
      <div className="col-sm-3">
        <img className="img-responsive" src={product.image} />
        <h2 className="text-center">{product.name}</h2>
        <div className="text-center">
          <h2 className="text-center">{product.price}</h2>
          <Link to={'/delete/'+product._id}>
            <button className="btn btn-primary">Delete</button>
          </Link>
          <div className ="divider"/>
          <Link to={'/edit/'+product._id}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        </div>
      </div>
    )
  }
}
