import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, convertToRaw} from 'draft-js';
import { Link, browserHistory } from 'react-router';

export default class CreateBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  }
  render() {
    const {editorState} = this.state;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    var contentState = editorState.getCurrentContent();

    let addBlog= ()=>{
      let content = convertToRaw(editorState.getCurrentContent());
      let title = this.refs.title.value;
      let addBlog={
        content: content,
        title: title
      }
      Meteor.call("insertBlog", addBlog, function(error, result){
        if(result ==='success'){
          console.warn("successfull");
        }
        else{
          console.warn("error");
          return;
        }
      });
    }
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="usr">Title:</label>
          <input ref="title" type="text" className="form-control" id="usr" />
        </div>
        <div className={`container-root ${this.state.hasFocus ? 'hasFocus' : ''}`}>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onFocus={() => this.setState({ hasFocus: true })}
            onBlur={() => this.setState({ hasFocus: false })}
            placeholder="Type your blog here..."
            editorState={this.state.editorState}
            onChange={this._handleChange}
          />
      </div>
      
        <div>
          <Link to='/blogList'>
          <button type = "submit" className="btn btn-default" onClick={addBlog} > Submit </button>
        </Link>
        </div>
      </div>
    );
  }
}
