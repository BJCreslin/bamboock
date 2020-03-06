import React from 'react';
import Post from "./Post/Post";
import {postspropsInterface} from "../../../index";

let css = require("./myposts.module.css");


export function MyPosts(props: postspropsInterface) {

    let myPostsElements = props.posts.map(

        value => (<Post message={value.message} likescount={value.likesCount}/>)
    );
    return (
        <div className={css.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea>text</textarea>
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

