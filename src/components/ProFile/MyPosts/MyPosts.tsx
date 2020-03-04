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

    let myPostsElements = MyPosts.map(
        value => (<Post message={value.message} likescount={value.likesCount}/>)
    );
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
                {myPostsElements}
            </div>
        </div>
    )
};

export default MyPosts;
