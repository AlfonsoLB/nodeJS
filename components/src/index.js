import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return  (
        <div className="ui container comments">
            <CommentDetail author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post" 
                avatar="https://source.unsplash.com/random"/>
            <CommentDetail author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="I like the subject"
                avatar="https://source.unsplash.com/random"/>
            <CommentDetail author="Jane"
                timeAgo="Yesterday at 5:00PM" 
                content="I like the writing"
                avatar="https://source.unsplash.com/random"/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));