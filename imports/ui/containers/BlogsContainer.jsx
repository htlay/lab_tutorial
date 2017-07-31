import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import BlogsListPage from '/imports/ui/pages/BlogsListPage.jsx';
import {Blogs} from '/imports/api/blogs/blogs.js';

export default createContainer((props) => {
  const blogSub = Meteor.subscribe('list_blog');
  let selector = {};

  const blogs = Blogs.find(selector).fetch();
  //console.warn('blog ', blogs);


  return {
    blogs: blogs,
    loading: !blogSub.ready()
  };

}, BlogsListPage);
