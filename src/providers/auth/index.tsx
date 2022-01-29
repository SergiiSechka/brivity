import React, {
    createContext, useContext, useState,
} from 'react';
import axios from 'src/api';
import { getError } from 'src/utils/get-error';

type User = {
    id: string;
    display_name: string;
};

export type RegistrationRequestData = {
    display_name: string;
    password: string;
    email: string;
};

export type LoginRequestData = {
    email: string;
    password: string;
};

type ContextProps = {
    user: User | null;
    signin: (params: LoginRequestData) => void;
    registration: (params: RegistrationRequestData) => void;
    signout: () => void;
    loading?: boolean;
    error?: string | null;
};

const AuthContext = createContext<ContextProps>({
    user: null,
    signin: () => {},
    registration: () => {},
    signout: () => {},
});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>();

    const registration = async (params: RegistrationRequestData) => {
        setLoading(true);
        setError(null);

        try {
            const { data } = await axios.post('/users', { user: params });

            setUser(data);
        } catch (error) {
            setUser(null);
            setError(getError(error));
        } finally {
            setLoading(false);
        }
    };

    const signin = async (params: LoginRequestData) => {
        setLoading(true);
        setError(null);

        try {
            const { data } = await axios.post('/users/sign_in', { user: params });

            setUser(data);
        } catch (error) {
            setUser(null);
            setError(getError(error));
        } finally {
            setLoading(false);
        }
    };

    const signout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={ {
                user,
                signin,
                signout,
                registration,
                loading,
                error,
            } }
        >
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
