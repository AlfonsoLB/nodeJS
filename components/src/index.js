import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return  (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Nice blog post" 
                    avatar="https://loremflickr.com/200/250?random=1"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="I like the subject"
                avatar="https://loremflickr.com/200/250?random=2"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Jane"
                timeAgo="Yesterday at 5:00PM" 
                content="I like the writing"
                avatar="https://loremflickr.com/200/250?random=3"/>
            </ApprovalCard>
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));