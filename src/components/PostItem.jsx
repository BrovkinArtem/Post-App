import React from 'react'
import MyButton from "./UI/Button/MyButton";
import {replace, useNavigate} from 'react-router-dom'

export const PostItem = (props) => {
  const {
    post: {
      title = 'Python',
      body = "Description",
    } = {},
    number,
    remove,
    post
  } = props

  const router = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {title}</strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${post.id}`, {replace: true})} type="button">
          Открыть
        </MyButton>
        <MyButton onClick={() => remove(post)} type="button">
          Удалить
        </MyButton>
      </div>
    </div>
  )
}

export default PostItem