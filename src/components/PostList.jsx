import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = (props) => {
  const {
    posts,
    title,
    remove
  } = props


  if (!posts.length) {
    return <h1 style={{textAlign:'center'}}>Посты не были найдены</h1>
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          const nodeRef = React.createRef()
          return (
            <CSSTransition
            nodeRef={nodeRef}
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <div ref={nodeRef}>
              <PostItem remove={remove} number={index + 1} post={post}/>
            </div>
          </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;