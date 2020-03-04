import React from 'react';
import Post from "./Post/Post";

let css = require("./myposts.module.css");

interface myPostsInterface {
    id: number,
    message: string,
    likesCount: number
}

const MyPosts = () => {
    const MyPosts: Array<myPostsInterface> = [
        {id: 1, message: "Hello World", likesCount: 12},
        {id: 2, message: "chuma", likesCount: 23},
        {id: 3, message: "you", likesCount: 19},
        {id: 4, message: "fantastic", likesCount: 34}
    ];
    return (
        <div className={css.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={css.posts}>
                <Post message="Hello World" likescount="15"/>
                <Post message="Hello fggggg" likescount="23"/>
                <Post message="Hu fjjg" likescount="34"/>
                <Post message="fhhh hhh" likescount="1"/>
                <Post message="Hi Hi World" likescount="11"/>
            </div>
        </div>
    )
};

export default MyPosts;
