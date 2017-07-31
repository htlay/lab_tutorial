import React, {PropTypes, Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {EditorState, convertFromRaw} from 'draft-js';

export default class OneBlogPage extends Component {
  render(){
    if(this.props.loading){
      return <div>loading...</div>
    }
    else{
      let blog = this.props.blog;
      let content = convertFromRaw(blog.content);
      let title = blog.title;
      let editorState = EditorState.createWithContent(content);
      return(
        <div>
          <div className="container">
            <h2 className="text-center"> {title}</h2>
            <Editor editorState = {editorState} toolbarHidden readOnly/>
          </div>
        </div>
      )
    }
  }
}
