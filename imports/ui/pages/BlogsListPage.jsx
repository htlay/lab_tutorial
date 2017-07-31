import React, {Component} from 'react';
import {Link} from 'react-router';
export default class BlogsListPage extends Component{
  render(){
    if(this.props.loading){
      return <div>loading...</div>

    }
    else{
      let blogs = this.props.blogs;
      console.warn('blogsssss', blogs);
      let BlogsList = blogs.map(function(blog){
        return (
          <Link to={'/blogs/' + blog._id}>
            <h4 className="align-left">{blog.title}
            </h4>
          </Link>
        )
      });
      return (
        <div>
          <div className='container'>
            {BlogsList}
          </div>
        </div>
      )
    }


  }

}
