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
import {postspropsInterface} from "./index";


// https://i.ibb.co/VL8GM8S/bblogo.gif

// https://colorscheme.ru/#0j41Tw0w0w0w0


export interface Dialog {
    id: number;
    name: string;
}

const dialogsData: Array<Dialog> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Egor"},
    {id: 3, name: "Zlata"},
    {id: 4, name: "Nastya"},
    {id: 5, name: "Fedor"}
];

export interface MessageInterface {
    id?: number;
    text: string;
}

const messagesData: Array<MessageInterface> = [
    {id: 1, text: "hi"},
    {id: 2, text: "hello"},
    {id: 3, text: "you"},
    {id: 4, text: "skidishhh"},
    {id: 5, text: "ssss"},
];

export interface propsDialogsInterface {
    dialogs: Array<Dialog>,
    mesages: Array<MessageInterface>
}

const propsDialog{

}
;


function App(props: postspropsInterface) {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">

                <Route path="/dialogs" render={() => <Dialogs propsDialog={propsDialog}/>}/>
                <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
