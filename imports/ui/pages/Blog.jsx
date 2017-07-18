import React, {PropTypes, Component} from 'react';
import BlogPage from './BlogPage.jsx';

export default class Blog extends Component {
    render() {
        if (this.props.loading) {
            return <div>loading...</div>;
        } else {

            return (
                <div>
                    <div className="container">
                        <BlogPage {...this.props}/>
                    </div>
                </div>
            )
        }
    }
}
