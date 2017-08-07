import React, {Component} from 'react';

export default class AddFavorite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let product = this.props.product;
    let user_id = Meteor.userId();

    let submitFavorite= () => {

      let insertValue = {
        product_id: product._id,
      }

      Meteor.call("insertfavorite", product._id, insertValue, function(error, result){
        if(result === 'success'){
          return Bert.alert('Add to favorite', 'success', 'fixed-top', 'fa-thumbs-o-up');
        }
        else{
          return Bert.alert('Error while processing' + 'Please try again', 'danger', 'fixed-top', 'fa-frown-o');
        }
      });

    }

    return (
      <div>
        <button onClick = {submitFavorite} type = "submit" className="btn btn-default">Add to Favorite</button>
      </div>
    )
  }
}
