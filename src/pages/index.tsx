import React from 'react';
import {
    BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { AuthProvider } from 'src/providers/auth';

import { AuthButton } from '../components/auth-button';

import { Login } from './login';
import { Posts } from './posts';
import { Registration } from './registration';

export const App: React.FC = () => (
    <AuthProvider>
        <Router>
            <div>
                <AuthButton />

                <Routes>
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/registration" element={ <Registration /> } />
                    <Route path="/" element={ <Posts /> } />
                </Routes>
            </div>
        </Router>
    </AuthProvider>
);
