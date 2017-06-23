import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Products} from '/imports/api/products/products.js';

let data =[ {
  name: 'Cali Yogo',
  image: 'https://swchllc.s3.amazonaws.com/photos/cali_yogo-strawberry.jpg',
  price: 15.99,
  flavor: ['strawberry', 'cream'],
},

{
  name: 'Mango',
  image:'https://swchllc.s3.amazonaws.com/products/salt/mango/0.png',
  price: 19.99,
  flavor: ['mango', 'spicy'],
},

{
  name: 'Apple Shake',
  image:'https://swchllc.s3.amazonaws.com/eliquids/milkshake_liquids-apple_shake.png',
  price: 14.99,
  flavor: ['apple', 'sour'],
},

{
  name: 'Modzilla',
  image:'https://swchllc.s3.amazonaws.com/eliquids/modzilla-_nuclear_fruit_punch.png',
  price: 13.99,
  flavor: ['Modzilla', 'spicy'],
},

{
  name: 'High Voltage Vapor Diode',
  image: 'https://swchllc.s3.amazonaws.com/photos/high_voltage_vaporz-diode.jpg',
  price: 13.99,
  flavors: ['high', 'voltage'],
},

{
  name: 'Lime',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/mother_nature_vapor-sweet_keffir_lime.jpg',
  price: 9.99,
  flavors: ['lemon', 'sour'],
}

];

console.log('inserting data');

let checkProducts = Products.find({}).fetch();
//console.warn('checkProducts', checkProducts);
for(i = 0; i<data.length; i++){
  //let selector = data[i];
  let selector = {name: data[i].name};
  Products.upsert(selector, {$set: data[i]});
}

  /*if(checkProducts == 0){
    for(i = 0; i<data.length; i++){
    Products.insert(data[i]);
  }
}*/
