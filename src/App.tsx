import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/ProFile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from "./components/Settings/Settings";


// https://i.ibb.co/VL8GM8S/bblogo.gif

// https://colorscheme.ru/#0j41Tw0w0w0w0

export interface myPostsInterface {
    id: number,
    message: string,
    likesCount: number
}

export interface postspropsInterface{
    posts:Array<myPostsInterface>
}

const postsArray: Array<myPostsInterface>  = [
    {id: 1, message: "Hello World", likesCount: 12},
    {id: 2, message: "chuma", likesCount: 23},
    {id: 3, message: "you", likesCount: 19},
    {id: 4, message: "fantastic", likesCount: 34}
];
function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>

                <Route path="/dialogs" render={() => <Dialogs/>}/>
                <Route path="/profile" render={() => <Profile posts={postsArray}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
