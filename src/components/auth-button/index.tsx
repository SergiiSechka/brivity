import React from 'react';
import { useAuth } from 'src/providers/auth';

export const AuthButton = () => {
    const auth = useAuth();

    return auth.user ? (
        <p>
            Welcome!
            <button type="button" onClick={ () => auth.signout() }>
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
};
