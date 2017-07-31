import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Blogs} from '/imports/api/blogs/blogs.js';

Meteor.publish("one_blog", function(blogId){
  let selector ={
    _id: blogId
  }
  console.warn('selector',selector );
  return Blogs.find(selector);
});
