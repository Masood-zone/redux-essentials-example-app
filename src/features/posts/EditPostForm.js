import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { postUpdated } from './postsSlice'

const EditPostForm = ({ match }) => {
    const { postId } = match.params
    const post = useSelector(state => state.posts.find(post => post.id === postId))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch();
    const history = useHistory();

    const savePost = () => {
        if (title && content) {
            dispatch(postUpdated({
                id: postId, title, content
            }))
            history.push(`/posts/${postId}`)
        }
    }
    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label>Post Title:</label>
                <input type='text' id='postTitle' name='postTitle' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Content</label>
                <textarea id='postContent' name='postConent' value={content} onChange={(e) => setContent(e.target.value)} />
                <button type='button' onClick={savePost}>Save Post</button>
            </form>
        </section>
    )
}

export default EditPostForm