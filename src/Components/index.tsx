import React from 'react';
import Left from './Body/Left';
import Right from './Body/Right';
import Header from './Header';
import './index.css';

export default function Index() {
    return (
        <div>
            <Header/>
            <div className="mainLayout">
            <Left/>
            <Right/>
            </div>
        </div>
    )
}
