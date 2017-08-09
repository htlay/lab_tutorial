import React, {Component} from 'react';

export default class RemoveFavorite extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let product = this.props.product;
    let user_id = Meteor.userId();
     console.log('userID', user_id);
    let removeProduct = () => {
      console.log('product', product);
      Meteor.call("deleteProduct", product._id, function(error, result){
        if(result === 'success'){
          return Bert.alert('Remove from favorite', 'success', 'fixed-top', 'fa-thumbs-o-up');
        }
        else{
          return Bert.alert('Error while processing' + 'Please try again', 'danger', 'fixed-top', 'fa-frown-o');
        }
      });
    }
    return(
      <div>
        <button onClick={removeProduct} type="submit" className="btn btn-danger">Remove from Favorite</button>
      </div>
    )
  }
}
