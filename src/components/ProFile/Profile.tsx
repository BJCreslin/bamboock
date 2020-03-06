import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {postspropsInterface} from "../../index";

let css = require("./content.module.css");

const Profile = (props:postspropsInterface) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
};

export default Profile;
