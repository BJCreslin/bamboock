import React from 'react';
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../index";

let css = require("../dialogs.module.css");


export const Dialog: React.FunctionComponent<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.name;
    return (<div className={css.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
};

