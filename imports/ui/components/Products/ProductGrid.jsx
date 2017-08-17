import React, {Component} from 'react';
import {Link} from 'react-router';
export default class ProductGrid extends Component {

  render() {
    let {product, catalogType} = this.props;
    return (
      <div className="col-sm-4">
        <img className="img-responsive"   src={product.image}/>
        <h2 className="text-center"> {product.name}  </h2>
        <div className="text-center">

          <h2> <span> ${catalogType === 'retail' ? product.price :  product.wholesale_price} </span> </h2>
          <Link to={'/product/' + product._id}>
            <button className="btn btn-primary text-center"> Buy Now </button>
          </Link>
        </div>
      </div>
    )
  }
}
