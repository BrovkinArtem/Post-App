import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  // const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})

    // console.log(bodyInputRef.current.value)
  }

  return (
    <div>
      <form>
        {/*Управляемый компонент*/}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название поста"
        />

        {/*Неуправляемый | Неконтролируемый компонент*/}
        {/*<MyInput*/}
        {/*  ref={bodyInputRef}*/}
        {/*  type="text"*/}
        {/*  placeholder="Описание поста"*/}
        {/*/>*/}

        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>
          Создать
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;