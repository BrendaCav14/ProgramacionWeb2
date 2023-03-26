import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AddCast } from '../components/AddCast';
import { AddGenre } from '../components/AddGenre';
import { AddMovie } from '../components/AddMovie';
import {Header} from '../components/Header';

export const AppRouter = () => {
    return (
        <div>
            <Header/>
            <AddMovie/>
        </div>
    )
}
