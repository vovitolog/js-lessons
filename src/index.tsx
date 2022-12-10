import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {User} from "./06-callbacks/06";
import {ManComponent, ManType} from "./07-destructuring_assignment/Destructuring";

const user: ManType = {
    name: "Vladimir",
    age: 37,
    lessons: [
        {title: '1'},
        {title: '2'}
    ],
    adress: {
        street: {
            title: "Ivanovskaya"
        }
    },
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ManComponent title={'test'} man={user}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
