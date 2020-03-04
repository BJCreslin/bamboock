import React from 'react';
let css=require('./header.module.css');

const Header = () => {
    return (
        <header className={css.header}>
            <img className={css.img} src="https://i.ibb.co/VL8GM8S/bblogo.gif" alt="logo"/>

        </header>
    )
};
export default Header;
