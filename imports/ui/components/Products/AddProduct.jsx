import React, {Component} from 'react';

export default class AddProduct extends Component {

  render() {

    const submitProduct = () => {
      let name = this.refs.name.value.trim();
      let volume = this.refs.volume.value.trim();
      let price = this.refs.price.value.trim();

      console.log('name', name);
      console.log('volume', volume);
      console.log('price', price);

      let product = {
        name: name,
        volume: volume,
        price: price
      }

      Meteor.call("addProduct", product, function(error, result){
        if(result === 'success'){
                console.warn("successful");
        }
        else{
          console.warn("error");
          return;
        }
      });

      this.refs.name.value = "";
      this.refs.volume.value = "";
      this.refs.price.value = "";

    }

    return (
      <div>
        <input ref="name" type="text" placeholder="Enter Name"/><br/>
        <input ref="volume" type="text" placeholder="Enter Volume"/><br/>
        <input ref="price" type="number" placeholder="Enter Price"/><br/>
        <button onClick={submitProduct}>Submit</button>
      </div>
    )
  }
}
