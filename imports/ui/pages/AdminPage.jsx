import React, {Component} from 'react';
import ProductAdmin from '/imports/ui/components/Products/ProductAdmin.jsx';
import {Link} from 'react-router';

export default class AdminPage extends Component {

  render() {
    if (this.props.loading){
      return <div>loading...</div>;
    }
    else{
      let products = this.props.products;

      let productsList = products.map(function(product) {
        console.log('product', product);
          return <ProductAdmin key={product._id} product={product}/>
        });

    return (
      <div>
         <div>
           <br></br>
            <br></br>
      <Link to="/insert">
          <button className="btn-success btn-primary"> Add Product </button>
      </Link>
        </div>
        <div className="container">
          {productsList}
        </div>
      </div>
    )
  }
}
}
