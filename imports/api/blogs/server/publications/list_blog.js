import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';

Meteor.publish("list_blog", function(){

    let selector={};
    console.warn('all',Blogs.find(selector).fetch());
    return Blogs.find(selector);
});
