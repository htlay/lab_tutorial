import React, {Component} from 'react';
import FavoriteGrid from '/imports/ui/components/Favorite/FavoriteGrid.jsx';
export default class viewFavoritePage extends Component{
  render() {
    if(this.props.loading){
      return <h1>loading... favorite </h1>
    }
    else {
      let products = this.props.products;
      let productsList = products.map(function(product,i){
          return <WishlistGrid key={i} product={product}/>
});
    return (
      <div>
        <div className="container">
          {productsList}

        </div>
      </div>
    )
  }
}
}
