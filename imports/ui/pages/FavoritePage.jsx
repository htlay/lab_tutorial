import React, {PropTypes, Component} from 'react';
import ProductDetails from '/imports/ui/components/Products/ProductDetails.jsx';
import {Link} from 'react-router';
import FavoriteGrid from '/imports/ui/components/Favorite/FavoriteGrid.jsx';
export default class FavoritePage extends Component {
    render() {
        if (this.props.loading) {
            return <div>loading...</div>;
        } else {
          let products = this.props.products;
          let productsList = products.map(function(product, i){
            return <FavoriteGrid key={i} product={product}/>
          });
          return (
              <div>
                <div className="containers">
                  {productsList}
                </div>
              </div>
          )
        }
    }
}
