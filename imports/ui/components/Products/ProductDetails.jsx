import React, {Component} from 'react';
import accounting from 'accounting';
import StarRating from 'star-rating-react';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
      avgRating : 0,
      totalStars: 0
    };
  if(props.reviews.length>0){
    let reviews = props.reviews;
    var countStars = 0;
    for (i = 0; i<reviews.length; i++){
      countStars += reviews[i].stars;
    }
    let avgStars = countStars/reviews.length;
    console.warn('avgStar', avgStars);
    this.state.totalStars = countStars;
    this.state.avgRating = avgStars;
  }
}

  render() {
    let {product, reviews} = this.props;
    console.warn('reviews', reviews);

    let flavors = [];
    if(product.flavors){
      flavors = product.flavors;
    }
    let flavorList = flavors.map(function(flavor, i){
        return <span key={i}>{flavor} </span>
    });
    let updateReview = (val) => {
      console.log(val);

      Meteor.call("insertReview", product._id, val, function(error, result){
        if(result === 'success'){
          return Bert.alert('Thank you for your rating.', 'success', 'fixed-top', 'fa-frown-o');
        }
        else{
          return Bert.alert('Sorry. Your review was not submitted', 'danger','fixed-top', 'fa-frown-o');
        }
      });
      let starTotal = this.state.totalStars + val;

      let reviewCount = reviews.length+1;
      if(reviews.length > 0){
        reviewsCount = reviews.length;
      }
      let newAvgRating = starTotal/reviewsCount;
      console.warn('newAvgRating', newAvgRating);
      this.setState({'avgRating': newAvgRating, 'totalStars': starTotal});

    }

    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src={product.image} />
            <h2 className="text-center">{product.name}</h2>
            {product.description ? <p className="lead">
              <strong>Description: </strong>
              {product.description}
            </p> : <p>no description available</p>}
            <p className="lead">
              <strong>Flavors: </strong>
              {flavorList}
            </p>
            <StarRating
              size={5}
              value={this.state.avgRating}
              onChange={updateReview}
            />
            <h2 className="text-center">{accounting.formatMoney(product.price)}</h2>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
