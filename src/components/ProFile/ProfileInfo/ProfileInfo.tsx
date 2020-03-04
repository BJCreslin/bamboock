import React from "react";

let css = require("./profile.module.css")

export const ProfileInfo = () => {
    return (
        <div>
            <div className={css.img}>
                <img src="https://i.pinimg.com/originals/43/54/61/435461381e0712ed00adc9777993df0f.jpg"/>
            </div>
            <div className={css.description}>
                avatar + description
            </div>
        </div>
    )
};
