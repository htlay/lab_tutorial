import React, {Component} from 'react';
import {Link} from 'react-router';
import DeleteButton from '/imports/ui/components/Buttons/DeleteButton.jsx';


export default class ProductAdmin extends Component {

  render() {
    let product = this.props.product;
    console.log('prop', product)
    return (

      <div className="col-sm-4">
        <img className="img-responsive" src={product.image} />
        <h2 className="text-center">{product.name}</h2>
        <div className="text-center">
        <h2>  <span> ${product.price} </span> </h2>
          <Link to={'/edit/' + product._id}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          {/* <EditButtons/> */}
          <br></br>
          <DeleteButton productID ={product._id}/>

      </div>
      </div>

    )
  }
}
